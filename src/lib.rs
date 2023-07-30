// use rand::prelude::*;
use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     #[wasm_bindgen(js_namespace = console)]
//     fn log(s: &str);
// }

#[wasm_bindgen]
pub fn render(timestamp: f64) -> f64 {
    // log(format!("hello {}", timestamp).as_str());

    return (timestamp / 1000.0).sin().abs();

    // TODO return a grid of pixels to paint?
}
