import React from "react";
import "../../styles/home.css";

export const Faq = () => {
  return (
    <>
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-lg-8 col-xl-7 text-center mb-4">
                        <h2 class="display-5 fw-bold mt-2 mb-3">Frequently Asked Questions</h2>
                        <p class="lead text-muted">Find the answers for the most frequently asked questions below</p>
                    </div>
                </div>
            <div class="row">
                <div class="col-12 col-lg-6 mx-auto">
                    <div class="accordion accordion-flush" id="faq01">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq01-header1">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq01-answer1" aria-expanded="false" aria-controls="faq01-answer1">
                                Question #1
                            </button>
                            </h2>
                            <div class="accordion-collapse collapse show" id="faq01-answer1" aria-labelledby="faq01-header1" data-bs-parent="#faq01">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq01-answer2" aria-expanded="false" aria-controls="faq01-answer2">
                                Question #2
                            </button>
                            </h2>
                            <div class="accordion-collapse collapse" id="faq01-answer2" aria-labelledby="flush-headingOne" data-bs-parent="#faq02">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq01-answer3" aria-expanded="false" aria-controls="faq01-answer3">
                                Question #3
                            </button>
                            </h2>
                            <div class="accordion-collapse collapse" id="faq01-answer3" aria-labelledby="flush-headingOne" data-bs-parent="#faq03">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq01-answer4" aria-expanded="false" aria-controls="faq01-answer4">
                                Question #4
                            </button>
                            </h2>
                            <div class="accordion-collapse collapse" id="faq01-answer4" aria-labelledby="flush-headingOne" data-bs-parent="#faq04">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq01-answer5" aria-expanded="false" aria-controls="faq01-answer5">
                                Question #5
                            </button>
                            </h2>
                            <div class="accordion-collapse collapse" id="faq01-answer5" aria-labelledby="flush-headingOne" data-bs-parent="#faq05">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};
