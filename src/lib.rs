use rand::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn render(timestamp: u32) -> i32 {
    log(format!("hello {}", timestamp).as_str());

    // Return a grid of pixels to paint?
    return thread_rng().gen_range(0..=5);
}
