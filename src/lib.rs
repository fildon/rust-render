use wasm_bindgen::prelude::*;
use wasm_bindgen::Clamped;
use web_sys::{window, CanvasRenderingContext2d, ImageData};

/**
 * Example usage:
 *
 * log(format!("hello {}", timestamp).as_str());
 */
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn render(timestamp: f64) {
    let window_ref = window().unwrap();
    let screen_height = window_ref.inner_height().unwrap().as_f64().unwrap() as u32;
    let screen_width = window_ref.inner_width().unwrap().as_f64().unwrap() as u32;
    let document: web_sys::Document = window_ref.document().unwrap();
    let canvas: web_sys::HtmlCanvasElement = document
        .get_element_by_id("canvas")
        .unwrap()
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .map_err(|_| ())
        .unwrap();

    let context = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<CanvasRenderingContext2d>()
        .unwrap();

    if canvas.height() != screen_height {
        canvas.set_height(screen_height);
    }
    if canvas.width() != screen_width {
        canvas.set_width(screen_width);
    }

    let data = create_image_data(timestamp, screen_width, screen_height);

    let data =
        ImageData::new_with_u8_clamped_array_and_sh(Clamped(&data), screen_width, screen_height)
            .unwrap();
    context.put_image_data(&data, 0.0, 0.0).unwrap();
}

fn create_image_data(timestamp: f64, screen_width: u32, screen_height: u32) -> Vec<u8> {
    let mut data = Vec::new();

    // Oscillate value between 0-255 integers
    let component_from_time = ((((timestamp / 1000.0).sin() + 1.0) / 2.0) * 255.0) as u8;

    // log(format!("hello {}", component_from_time).as_str());

    for y in 0..screen_height {
        let y_component = ((((f64::from(y) / 50.0).sin() + 1.0) / 2.0) * 255.0) as u8;
        for x in 0..screen_width {
            let x_component = ((((f64::from(x) / 50.0).sin() + 1.0) / 2.0) * 255.0) as u8;

            // Red value
            data.push(x_component);
            // Green value
            data.push(y_component);
            // Blue value
            data.push(component_from_time as u8);
            // Alpha value
            data.push(255);
        }
    }

    data
}
