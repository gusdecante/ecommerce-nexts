import type { InferGetServerSidePropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Marquee, Hero } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
