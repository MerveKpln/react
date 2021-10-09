import React from 'react'
import SectionTitle from './SectionTitle'
import Service from './Service'

const Services = () => {
    return (
        <section id="services" class="services-02 py-6 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle desc="best feature" title="Services" />
                        
                    </div>
                </div>
                <div class="row mt-3">
                   
                    <div class="col-md-6 col-lg-4">
                        <Service img="assets/img/art-design.svg" title="Graphic Design" desc="specialise in Graphic design Whether you need to create a new website or updat" />
                        
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                    <Service img="assets/img/web-design.svg" title="Web Design" desc="design, build & maintain websites that keep pace with our digital world." />
                        
                    </div>
                  
                    <div class="col-md-6 col-lg-4">
                    <Service img="assets/img/portfolio.svg" title="App Development" desc="build mobile first solutions for ios, Android taking your idea to polished product." />

                       
                    </div>
                   
                    <div class="col-md-6 col-lg-4">
                    <Service img="assets/img/musical-notes.svg" title="Musice Writing" desc="Music copying, writing, creat, transcription, arranging composition services." />

                        
                    </div>
                   
                    <div class="col-md-6 col-lg-4">
                    <Service img="assets/img/website.svg" title="Digital Marketing" desc="Generate your sales opportunity with our best digital marketing services." />

                       
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                    <Service img="assets/img/brand-awareness.svg" title="Brand Identity" desc="I can manufacture magic that allows your brand to stand out from the crowd." />

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
