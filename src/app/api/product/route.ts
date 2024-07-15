import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Air Jordan 1 Mid SE",
    price: "2.129.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85856382-79b6-4f28-af1e-4c056d371290/air-jordan-1-mid-se-shoes-wpm50P.png",
  },
  {
    id: 2,
    title: "Jordan Stadium 90",
    price: "2.199.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6e9c9d3a-3bef-4f39-84a9-77365bbf8c50/jordan-stadium-90-shoes-Jn6ZH4.png",
  },
  {
    id: 3,
    title: "Jordan Spizike Low",
    price: "2.489.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a7300d5-db38-40ad-a4d4-01ca2e841945/jordan-spizike-low-shoes-pBZk7c.png",
  },
  {
    id: 4,
    title: "Jordan Spizike Low",
    price: "2.489.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a7300d5-db38-40ad-a4d4-01ca2e841945/jordan-spizike-low-shoes-pBZk7c.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
