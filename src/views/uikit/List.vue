<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card" style="padding-bottom: 0.5rem !important;">
                <h5><span class="blue-color text-left">SAT</span>CERTIFICATES</h5>
                    <div class="col-12 p-0">
                        <div class="flex justify-content-space-between align-items-center w-full img-wrapper">
                            <Image src="/demo/images/certificates/sat/2-attempt.png" class="with-image" preview data-aos="fade-down"/>
                            <Image src="/demo/images/certificates/sat/1-attempt.png" class="with-image" preview data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-between text-warpper">
                        <h5 class="text"><span class="blue-color">2nd</span> ATTEMPT (TOTAL SCORE:<span class="blue-color text-right">1110</span>)</h5>
                        <h5 class="text"><span class="blue-color">1st</span> ATTEMPT (TOTAL SCORE:<span class="blue-color text-right">990</span>)</h5>
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
    .img-wrapper > span > img {
        width: 100%;
        border: 1px solid var(--surface-border);
        box-shadow: var(--card-shadow);
        cursor: pointer;
    }
    .justify-content-space-between {
        justify-content: space-between !important;
    }
    .text {
        padding: 0 !important;
        margin: 25px 0 12px 0 !important;
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
    @media (max-width: 600px) {
        h5 {
         font-size: 0.5rem !important;
        }
    }
</style>
