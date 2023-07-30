use std::ops::Add;
use wasm_bindgen::prelude::*;
use wasm_bindgen::Clamped;
use web_sys::{CanvasRenderingContext2d, ImageData};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn render_to_ctx(ctx: &CanvasRenderingContext2d, timestamp: f64) -> Result<(), JsValue> {
    ctx.clear_rect(0.0, 0.0, 600.0, 600.0);
    // log(format!("hello {}", timestamp).as_str());

    let c = Complex {
        real: 0.7885 * (timestamp / 5000.0).sin(),
        imaginary: 0.7885 * (timestamp / 5000.0).cos(),
    };
    let data = create_image_data(c);
    let data = ImageData::new_with_u8_clamped_array_and_sh(Clamped(&data), 600, 600)?;
    ctx.put_image_data(&data, 0.0, 0.0)
}

fn create_image_data(c: Complex) -> Vec<u8> {
    let mut data = Vec::new();

    let param_i = 1.5;
    let param_r = 1.5;
    let scale = 0.005;

    for x in 0..600 {
        for y in 0..600 {
            let z = Complex {
                real: y as f64 * scale - param_r,
                imaginary: x as f64 * scale - param_i,
            };
            let iter_index = get_iter_index(z, c) * 10;
            data.push(0); // R
            data.push(0); // G
            data.push(iter_index as u8); // B
            data.push(255); // A
        }
    }

    data
}

fn get_iter_index(z: Complex, c: Complex) -> u32 {
    let mut iter_index: u32 = 0;
    let mut z = z;
    while iter_index < 30 {
        if z.norm() > 2.0 {
            return iter_index;
        }
        z = z.square() + c;
        iter_index += 1;
    }
    1024
}

#[derive(Clone, Copy, Debug)]
struct Complex {
    real: f64,
    imaginary: f64,
}

impl Complex {
    fn square(self) -> Complex {
        let real = (self.real * self.real) - (self.imaginary * self.imaginary);
        let imaginary = 2.0 * self.real * self.imaginary;
        Complex { real, imaginary }
    }

    fn norm(&self) -> f64 {
        (self.real * self.real) + (self.imaginary * self.imaginary)
    }
}

impl Add<Complex> for Complex {
    type Output = Complex;

    fn add(self, rhs: Complex) -> Complex {
        Complex {
            real: self.real + rhs.real,
            imaginary: self.imaginary + rhs.imaginary,
        }
    }
}
