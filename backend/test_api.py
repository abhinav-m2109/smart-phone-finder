import requests
import json

def test_api():
    url = "http://localhost:8000/api/predict-hike"
    payload = {
        "phone_id": "oneplus-12",
        "phone_name": "OnePlus 12 5G",
        "current_price": 849.0,
        "launch_price": 799.0,
        "lowest_price": 699.0,
        "highest_price": 849.0,
        "price_history": [
            {"month": "Mar", "price": 799.0},
            {"month": "Apr", "price": 699.0},
            {"month": "May", "price": 749.0},
            {"month": "Jun", "price": 799.0},
            {"month": "Jul", "price": 829.0},
            {"month": "Aug", "price": 849.0}
        ]
    }

    try:
        response = requests.post(url, json=payload)
        print("Status Code:", response.status_code)
        print("Response JSON:")
        print(json.dumps(response.json(), indent=2))
    except Exception as e:
        print("API test error (Is the server running?):", e)

if __name__ == "__main__":
    test_api()
