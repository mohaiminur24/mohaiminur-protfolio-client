import DefaultPageWrapper from "./common-component/default-page-wrapper";
import MainSlider from "./common-component/home-page/main-slider";
import MainFooter from "./theme/main-footer";
import MainHeader from "./theme/main-header";

export default function Home() {
  return (
    <>
      <MainHeader />
      <MainSlider />
      <DefaultPageWrapper>
        <div>
          <h1 className="font-bellefair">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quibusdam porro ipsa, voluptate beatae dolor laborum. Iste libero
            reprehenderit, accusantium eligendi veniam debitis, blanditiis
            quisquam ratione, eum temporibus adipisci dolorem?
          </h1>
        </div>
      </DefaultPageWrapper>
      <MainFooter />
    </>
  );
}
