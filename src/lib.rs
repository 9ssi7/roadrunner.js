use jwt_simple::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn jwt_encode(secret: &str, company: &str, user_id: &str) -> Result<String, JsValue> {
    let key = HS256Key::from_bytes(secret.as_bytes());
    let claims = Claims::create(Duration::from_hours(4))
        .with_issuer(company)
        .with_subject(user_id);

    key.authenticate(claims)
        .map_err(|e| JsValue::from_str(&e.to_string()))
}

#[wasm_bindgen]
pub fn jwt_decode(secret: &str, token: &str) -> Result<String, JsValue> {
    let key = HS256Key::from_bytes(secret.as_bytes());
    key.verify_token::<NoCustomClaims>(&token, None)
        .map(|claims| serde_json::to_string(&claims).unwrap())
        .map_err(|e| JsValue::from_str(&e.to_string()))
}
