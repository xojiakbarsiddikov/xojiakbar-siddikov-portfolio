<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-tickets">
                    <h4 style="margin: 0;" class="ticket-text flex align-items-center">Tickets to<span class="blue-color text-left text-right">IELTS & SAT & CEFR</span>Tests
                    <img src="/demo/images/certificates/test-tickets/ticket.png" class="media-ticket-img" alt="ticket" width="50" style="margin-left: 10px;">
                    </h4>
                    <div class="col-12 p-0 mt-3">
                        <div class="flex justify-content-space-between align-items-center w-full img-wrapper">
                            <Image src="/demo/images/certificates/test-tickets/test-ticket1.jpg" class="with-image2" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                             <Image src="/demo/images/certificates/test-tickets/test-ticket3.jpg" class="with-image2" preview data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600"/>
                            <Image src="/demo/images/certificates/test-tickets/test-ticket2.jpg" class="with-image2" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                        </div>
                    </div>
                    <div class="flex justify-content-around text-warpper ticket-wrapper">
                        <h5 class="text"><span class="blue-color">IELTS</span> Ticket</h5>
                        <h5 class="text"><span class="blue-color">SAT</span> Ticket</h5>
                        <h5 class="text"><span class="blue-color">CEFR</span> Ticket</h5>
                    </div>
                    <div class="footer-ticket">
                     <Image src="/demo/images/certificates/test-tickets/test-ticket4.jpg" preview data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600"/>
                    </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .with-image2 {
        width: 31%;
        border-radius: 12px;
        cursor: pointer;
    }
    .footer-ticket {
        text-align: center;
    }
    .footer-ticket > span {
        width: 40%!important    ;
    }
    .footer-ticket > span > img {
        width: 100%;
        overflow: hidden;
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
    .card-tickets {
        padding-bottom: 0.5rem !important;
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
    @media (max-width: 700px) {
        .ticket-wrapper > h5 {
         font-size: 0.8rem !important;
        }
        .text {
            padding: 0 !important;
            margin: 10px 0 12px 0 !important;
        }
        .ticket-text {
            font-size: 1rem;
        }
        .media-ticket-img {
            width: 30px;
        }
    }
</style>