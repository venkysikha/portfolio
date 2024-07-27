import image from "./weblogo.jpg";
import full from "./FullStack.jpg";
import code from "./Coding.avif";
function Service() {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>services</h1>
        </div>
        <div className="row my-3">
          <div className="col md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">web desingning</h5>
                <p class="card-text">
                  Looking to elevate your online presence with stunning web
                  designs? I specialize in creating beautiful, functional
                  websites tailored to your unique needs. With a focus on user
                  experience, responsive design, and modern aesthetics, I
                  transform your vision into a captivating digital experience.
                </p>
                <a href="/" class="btn btn-primary">
                  web design
                </a>
              </div>
            </div>
            </div>
            <div className="col md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={full} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Programming</h5>
                <p class="card-text">With extensive experience in 
             Java, C, and Python, I specialize in crafting unique, responsive,
                      and user-friendly websites tailored to your needs. 
                      My portfolio showcases a range of successful projects, from sleek corporate sites to dynamic e-commerce platforms. Combining creativity with technical expertise,
                       I ensure each design is not only visually appealing but also optimized for performance and usability. 
                </p>
                <a href="/" class="btn btn-primary">
                 programming
                </a>
              </div>
            </div>
            </div>
            <div className="col md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={code} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">full stack development</h5>
                <p class="card-text">
                With extensive experience in full stack development,
                 I specialize in crafting unique, responsive,
                  and user-friendly websites tailored to your needs.
                   My portfolio showcases a range of successful projects,
                 from sleek corporate sites to dynamic e-commerce platforms.
                </p>
                <a href="/" class="btn btn-primary">
                  full-stack 
                </a>
              </div>
            </div>
            </div>
            </div>
      </div>
    </>
  );
}
export default Service;
