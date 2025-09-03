<script setup>
    const src = './demo/videos/ielts-video.mp4'
    const type = 'video/mp4'
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-ielts">
                <h4 class="ielts-text" style="margin: 0;"><span class="blue-color text-left">IELTS</span>CERTIFICATES <span class="blue-color text-left">&</span>VIDEO</h4>
                    <div class="col-12 p-0 mt-3">
                        <div class="flex justify-content-space-between align-items-center w-full img-wrapper media-flex width-images score-down-image">
                            <Image src="/demo/images/certificates/ielts/my_ielts.jpg" class="with-image" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                            <video class="ielts-video" :key="src" controls data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
                                <source :src="src" :type="type">
                            </video>
                            <Image src="/demo/images/certificates/ielts/break-down.jpg" class="with-image second-image" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-around text-warpper ielts-text-wrapper align-items-center">
                        <h5><span class="blue-color">1st</span> ATTEMPT (TOTAL SCORE:<span class="blue-color text-right">BAND 7.0</span>)</h5>
                        <h5><span class="blue-color">VIDEO</span> FOR MEMORY <span class="blue-color text-right"></span></h5>
                        <h5>SCORE-DOWN(<span class="blue-color text-right">Section-by-Section</span>)</h5>
                    </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .with-image {
        width: 43%;
        border-radius: 12px;
        cursor: pointer;
    }
    .ielts-video{
        width: 380px;
        cursor: pointer;
    }
    .width-images > span {
        width: 31% !important;
    }
    .score-down-image > .second-image{
        width: 33.4% !important;
    }
    .img-wrapper > span > img {
        width: 100%;
        border: 1px solid var(--surface-border);
        box-shadow: var(--card-shadow);
        cursor: pointer;
    }
    .justify-content-space-between {
        justify-content: space-between !important;
    }
    .justify-content-space-around {
        justify-content: space-around;
    }
    .card-ielts {
        padding-bottom: 0.5rem !important;
    }
    .ielts-text-wrapper > h5 {
        padding: 0 !important;
        margin: 25px 0 12px 0 !important;
    }
    .video {
        width: 24%;
    }
    .layout-content-wrapper {
        padding-bottom: 1rem !important;
    }
    .blue-color {
    color: #6366f1;
    }
    .p-image-preview-indicator {
        height: 99% !important;
    }
    .text-left {
        margin-right: 5px;
    }
    .text-right {
        margin-left: 5px;
    }
    @media (max-width: 1600px) {
        .ielts-video {
            width: 285px;
        }
    }
    @media screen and (max-width: 1030px) {
        .ielts-video {
            width: 160px;
        }
    }
    @media (max-width: 700px) {
        .ielts-text {
         font-size: 1.2rem !important;
        }
        .ielts-video {
           width: -webkit-fill-available;
           margin: 10px 0;
        }
        .media-flex {
            display: block!important;
        }
        .media-flex > span {
            display: inline!important;;
        } 
        .ielts-text-wrapper {
            display: grid!important;;
        }
        .ielts-text-wrapper > h5 {
            font-size: 1rem;
        }
    }
</style>