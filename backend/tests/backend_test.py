"""Backend API tests for Talleres M. Iniesta contact endpoint"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://woodcraft-preview-4.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api_client):
    r = api_client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


def test_contact_post_and_persistence(api_client):
    unique = f"TEST_{uuid.uuid4().hex[:8]}"
    payload = {
        "nombre": f"{unique} Tester",
        "empresa": "TMI QA",
        "email": f"{unique}@example.com",
        "telefono": "+34 600000000",
        "mensaje": "Prueba automatica",
    }
    r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["nombre"] == payload["nombre"]
    assert body["email"] == payload["email"]
    assert body["telefono"] == payload["telefono"]
    assert "id" in body

    # verify persistence via GET
    r2 = api_client.get(f"{BASE_URL}/api/contact")
    assert r2.status_code == 200
    docs = r2.json()
    assert isinstance(docs, list)
    assert any(d.get("email") == payload["email"] for d in docs), "New contact not found in GET /api/contact"
    # ensure no _id leak
    for d in docs[:5]:
        assert "_id" not in d


def test_contact_minimal_optional_fields(api_client):
    unique = f"TEST_{uuid.uuid4().hex[:8]}"
    payload = {
        "nombre": f"{unique} Min",
        "email": f"{unique}@example.com",
        "telefono": "600111222",
    }
    r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    b = r.json()
    assert b["empresa"] == ""
    assert b["mensaje"] == ""


def test_contact_missing_required_returns_422(api_client):
    r = api_client.post(f"{BASE_URL}/api/contact", json={"nombre": "x"})
    assert r.status_code == 422
