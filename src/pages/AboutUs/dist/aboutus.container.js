"use strict";
exports.__esModule = true;
var React = require("react");
var header_component_1 = require("../../common/Navigation/header.component");
var navigation_component_1 = require("../../common/Navigation/navigation.component");
var image_component_1 = require("../../common/Image/image.component");
var banner2_png_1 = require("../../assets/images/backgrounds/banner2.png");
var footer_component_1 = require("../../common/Footer/footer.component");
var react_router_dom_1 = require("react-router-dom");
var react_multi_carousel_1 = require("react-multi-carousel");
require("react-multi-carousel/lib/styles.css");
var booktrailer_png_1 = require("../../assets/images/backgrounds/booktrailer.png");
var bookgroup_png_1 = require("../../assets/images/books/bookgroup.png");
var Rounded_Rectangle_png_1 = require("../../assets/images/backgrounds/Rounded Rectangle.png");
var radioint_png_1 = require("../../assets/images/backgrounds/radioint.png");
var websites_png_1 = require("../../assets/images/backgrounds/websites.png");
var usreview_png_1 = require("../../assets/images/backgrounds/usreview.png");
var book_review1_png_1 = require("../../assets/images/books/book-review1.png");
var Amazon_Kindle_png_1 = require("../../assets/images/logo/Amazon Kindle.png");
var barnes___noble_png_1 = require("../../assets/images/logo/barnes & noble.png");
var chapters_png_1 = require("../../assets/images/logo/chapters.png");
var indigo_png_1 = require("../../assets/images/logo/indigo.png");
var ingram_png_1 = require("../../assets/images/logo/ingram.png");
var lightning_source_png_1 = require("../../assets/images/logo/lightning source.png");
var AboutUs = function () {
    var _a = React.useState([]), state = _a[0], setstate = _a[1];
    var history = react_router_dom_1.useHistory();
    var toAboutUs2 = function (name) {
        switch (name) {
            case 'book-covers':
                history.push('/PackageAndServices/#book-covers');
                break;
            case 'book-trailer':
                history.push('/PackageAndServices/#book-trailer');
                break;
            case 'radio-interview':
                history.push('/PackageAndServices/#radio-interview');
                break;
            case 'website':
                history.push('/PackageAndServices/#website');
                break;
        }
    };
    React.useEffect(function () {
        document.title = "Stratton Press";
    }, []);
    var responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (React.createElement("div", { className: "AboutUs-Component" },
        React.createElement(header_component_1["default"], { bgcolor: "#043439" }),
        React.createElement(navigation_component_1["default"], null),
        React.createElement("div", { className: "container-fluid aboutus-header" },
            React.createElement("div", { className: "hero" }, "About Us")),
        React.createElement("div", { className: "aboutus-banner-section" },
            React.createElement("div", { className: "col container-fluid aboutus-banner-image" },
                React.createElement(image_component_1["default"], { src: banner2_png_1["default"], className: "images", width: "550", height: "650", alt: "..." })),
            React.createElement("div", { className: "col container-fluid aboutus-tagline-section" },
                React.createElement("div", { className: "aboutus-tagline-body" },
                    React.createElement("span", { className: "aboutus-tagline align-items-center" },
                        React.createElement("label", { className: "support" }, "We Support You."),
                        React.createElement("label", { className: "celebrate" }, "We Celebrate You.")),
                    React.createElement("br", null),
                    React.createElement("span", { className: "aboutus-tagline-content" },
                        React.createElement("p", null, "Many writers have dreamt to be authors. But not all writers get to fulfill this dream. We understand how difficult the road to publishing can get. With thousands of manuscripts written everyday, not all get the chance to be picked up by a publisher."),
                        React.createElement("p", null, "Stratton Press Publishing is a supported self-publishing company. Our mission is help you take the brave, first steps. "),
                        React.createElement("p", null, "It can be a handwritten manuscript you have long shelved; allow us to take it into the next form. It can be a story so beautifully written; we can match it with an equally beautiful cover that piques any reader\u2019s interest. You may be confident with your plot\u2019s twist and turns, but would appreciate an extra set of eyes for copyediting. "),
                        React.createElement("p", null, "We can get you to interviews and book fairs. We can create for you, book trailers, your own website, even your own social media presence. Most importantly, we will have your book available in Amazon, Barnes and Noble, Ingram, etc -  you know, the usual places.  You will basically have a whole team to back you up!"),
                        React.createElement("p", null, "We are here to support you. To get you more space so that the world can see your story. And yes, should a traditional publisher discover the wonder that you truly are, we will be as joyful as you. Our mission is to get you through the door. And in each step closer, we will celebrate You."))))),
        React.createElement("div", { className: "publishing-sect" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "text-container" },
                    React.createElement("h1", null,
                        "Publishing with ",
                        React.createElement("span", null, "Stratton Press means YOU:")),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Retain ownership of your work."),
                        React.createElement("li", null, "Can expect to have amazing book covers!"),
                        React.createElement("li", null, "Have an entire team to support you in copyediting and interior design."),
                        React.createElement("li", null, "Have your book available in paperback, hardback, and e-book formats."),
                        React.createElement("li", null, "Can have your book printed at 1 copy or more! And you won't go out of print."),
                        React.createElement("li", null, "Earn royalties for every sale."),
                        React.createElement("li", null, "Have online distribution channels worldwide!"))))),
        React.createElement("div", { className: "section-1" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null,
                            "HOW IT ",
                            React.createElement("span", null, "WORKS")),
                        React.createElement("p", null, "How the Publishing Process Comes Together")),
                    React.createElement("div", { className: "right" },
                        React.createElement(image_component_1["default"], { src: Rounded_Rectangle_png_1["default"], alt: "..." }))))),
        React.createElement("div", { className: "section-2" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement(image_component_1["default"], { src: bookgroup_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "CUSTOMIZED BOOK COVERS"),
                        React.createElement("p", null, "We take pride in creating book covers that mirror your book\u2019s soul.  Our team of artists are of high calibre and award-winning."),
                        React.createElement("button", { onClick: function () { return toAboutUs2('book-covers'); } }, "See Samples"))))),
        React.createElement("div", { className: "section-3" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null, "BOOK TRAILER"),
                        React.createElement("p", null, "What if we can add color to your story and basically bring your book to life? We will create beautiful trailers that show a glimpse of your story through images and sounds"),
                        React.createElement("button", { onClick: function () { return toAboutUs2('book-trailer'); } }, "See Samples")),
                    React.createElement("div", { className: "right" },
                        React.createElement(image_component_1["default"], { src: booktrailer_png_1["default"], alt: "..." }))))),
        React.createElement("div", { className: "section-4" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement(image_component_1["default"], { src: radioint_png_1["default"], alt: "..." })),
                    React.createElement("div", { className: "right" },
                        React.createElement("h1", null, "RADIO INTERVIEW"),
                        React.createElement("p", null, "Take the Wonderful opportunity to talk about your story, your characters, your inspiration in a very insightful interview with Ric Bratton in This Week in America."),
                        React.createElement("button", { onClick: function () { return toAboutUs2('radio-interview'); } }, "See Samples"))))),
        React.createElement("div", { className: "section-5" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "left" },
                        React.createElement("h1", null, "YOUR OWN WEBSITE"),
                        React.createElement("p", null, "Do you want to have your own marketing took, with your own content? A website customized for you, will do just that. Put in your books, your videos, testimonials, etc - with our talented website creators."),
                        React.createElement("button", { onClick: function () { return toAboutUs2('website'); } }, "See Samples")),
                    React.createElement("div", { className: "right" },
                        React.createElement(image_component_1["default"], { src: websites_png_1["default"], alt: "..." }))))),
        React.createElement("div", { className: "bookreviews" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "content" },
                    React.createElement("h1", null, "BOOK REVIEWS"),
                    React.createElement("img", { src: usreview_png_1["default"], alt: "..." })))),
        React.createElement("div", { className: "bookreviews-2" },
            React.createElement("div", { className: "w-100" },
                React.createElement(react_multi_carousel_1["default"], { responsive: responsive, swipeable: true, draggable: false, showDots: true, ssr: true, infinite: true, autoPlay: false, autoPlaySpeed: 1000, keyBoardControl: true, customTransition: "all .5", transitionDuration: 1000, containerClass: "carousel-container", removeArrowOnDeviceType: ["tablet", "mobile"], dotListClass: "custom-dot-list-style", itemClass: "carousel-item-padding-40-px" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "The Saint James Conspiracy"),
                                React.createElement("span", null, "by Jessica Murphy"),
                                React.createElement("p", null, "The alternating narrative structure keeps readers guessing because of unpredictable shifts, turns, and switches. The fusion of a modern thriller with the often controversial and highly debated Gnostic beliefs regarding Jesus Christ almost reminds one of Angels and Demons. Readers who enjoy historical fiction with a sprinkle of spiritual enlightening and those who thrive an action thrillers will likely enjoy this book.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "The Last Troubadour"),
                                React.createElement("span", null, "by Eugene Scruggs"),
                                React.createElement("p", null, "Scruggs expertly combines facts derived from Coypeau's autobiography and features some of his poems and songs, filling in some historical gaps with fictional interludes or characters. The narrative voice is strong, often direct and authentic. The contrast isn't jarring, and the down-to-earth delivery is accessible to mainstream readers. Scruggs's lively writing is reflective of Coypeau's artistic sensibilities, providing a fair sense of the cultural milieu.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "For All Eternity: A Story of Heaven"),
                                React.createElement("span", null, "by J.C. Gottlieb"),
                                React.createElement("p", null, "As the mother narrates the story of her daughter, small details hold the telling together. As a struggle with the stages of grief, the story is convincingly told. In providing a model of her grieving process, Gottlieb insightfully creates a channel, enabling readers to mourn the loss of loved ones more imaginatively themselves.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "Bargain$, Budget$, Discount$, and Deal$; Eking Out in Brutal Times"),
                                React.createElement("span", null, "by Brian M. Mich"),
                                React.createElement("p", null, "Mich, disavowing any special knowledge of economics, writes in a personable style that engages the reader and implies but does not preach his opinions. He gives sound, practical advice on issues ranging from managing credit card debt to avoiding sweets and buying cheaper \"tag-less tea\" while advocating for more ponderous strategies like universal healthcare in an equally fair but undeniably thought-provoking way. His glossary, accrued over a long period of dictionary study, puts specialized material in a recognizable, accessible format that will appeal to anyone trying to organize a budget and stay afloat in the current, often confusing, financial flow.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "Poems from the Edge"),
                                React.createElement("span", null, "by Ginny Worley"),
                                React.createElement("p", null, "Throughout these pages, a strong theme is the poet's emphatic insistence for any reader who might be struggling with seemingly insurmountable circumstances to never give up. This is more than a book of poems. It can also be seen as an encouraging self-help guide and motivational testament directly from author to reader. Furthermore, Worley's work is a perfect example of the therapeutic healing nature that the writing process can and does provide for so many individuals.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "The Nature of Good Government"),
                                React.createElement("span", null, "by H. Doyle Smith"),
                                React.createElement("p", null, "Though books concerning government, politics, and economics can sometimes be hard to comprehend, Smith's use of analogies to explain these elements makes some of his more difficult subjects accessible to all readers. This drawing upon life experience, such as his interest in how people interact and his work as a certified public accountant, gives Smith his unique view of effective government. Those wishing to understand how government works, or how it should work, will find much to contemplate in this offering.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "Through the Rainy Season: Out of the Floods of Addiction"),
                                React.createElement("span", null, "by Dylan Ward"),
                                React.createElement("p", null, "With vivid descriptions, Martinez paints another part of the world as exotic as he seeks to rid his body of poison. His story is relatable, hypnotic, and unique as he articulates the mental and physical anguish of addiction that is harrowing to witness. Readers are made richer by Martinez's experience in this compelling read.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "Shandy & Orion: Two Happy Guinea Pigs"),
                                React.createElement("span", null, "by Kathy Rocus"),
                                React.createElement("p", null, "The images are professionally done\u2014bright, colorful, and simple. This book was clearly written by an education specialist who knows what children can read, what they are interested in, and how to deliver it all. Every kindergarten, early elementary, and special education class should make shelf space for these adorable guinea pigs.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "The Early Years: A Memoir"),
                                React.createElement("span", null, "By Rachel G. Carrington"),
                                React.createElement("p", null, "An authentic depiction of a lifetime of experiences, this autobiography captures a range of emotions in its most unadulterated form, both of Carrington's formative years as well as the duality of the trying times and moments of jubilation in raising her own family. Undoubtedly, the author's strength lies in the ability to portray her truth succinctly that both sheds light on her life and immediately creates an instant connection and relatability with her audience.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex" },
                            React.createElement("div", { className: "left" },
                                React.createElement("img", { src: book_review1_png_1["default"], alt: "..." })),
                            React.createElement("div", { className: "right" },
                                React.createElement("h1", null, "A Team-Based Learning Guide for Faculty"),
                                React.createElement("span", null, "by Dr. David Hawkins"),
                                React.createElement("p", null, "Utilizing graphs, others' work, and specific examples of this process, the book clearly outlines how TBL is a viable and pertinent way to teach in order for students to develop greater knowledge and further insights through higher learning techniques. It uses a helpful step-by-step approach that is easily followed and integrated. The book is well-written and features excellent examples that should prove useful to its target audience."))))))),
        React.createElement("div", { className: "contactus" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { className: "flex" },
                    React.createElement("form", { className: "learn-form" },
                        React.createElement("span", { className: "head" },
                            React.createElement("h1", null, "Want to Learn More?"),
                            React.createElement("h3", null, "Request Your Free Publishing Consultation Below"),
                            React.createElement("label", null, "Fill our form to learn more about publishing with Stratton Press")),
                        React.createElement("span", { className: "form" },
                            React.createElement("div", { className: "manus" },
                                React.createElement("label", null, "Do you have a minuscript that is ready to publish *"),
                                React.createElement("select", { name: "manuscript", id: "cars" },
                                    React.createElement("option", { value: "Selected" }, "Yes, I am ready to publish today"),
                                    React.createElement("option", { value: "volvo" }, "Volvo"),
                                    React.createElement("option", { value: "saab" }, "Saab"),
                                    React.createElement("option", { value: "mercedes" }, "Mercedes"),
                                    React.createElement("option", { value: "audi" }, "Audi"))),
                            React.createElement("div", { className: "fname" },
                                React.createElement("label", null, "First Name"),
                                React.createElement("input", { type: "text", name: "First Name" })),
                            React.createElement("div", { className: "lname" },
                                React.createElement("label", null, "Last Name"),
                                React.createElement("input", { type: "text", name: "First Name" })),
                            React.createElement("div", { className: "email" },
                                React.createElement("label", null, "E-mail Address"),
                                React.createElement("input", { type: "text", name: "First Name" })),
                            React.createElement("div", { className: "phone" },
                                React.createElement("label", null, "Phone"),
                                React.createElement("input", { type: "text", name: "First Name" })),
                            React.createElement("div", { className: "foot" },
                                React.createElement("button", null, "Request Free Consultation"),
                                React.createElement("p", { className: "privacy" },
                                    "By clicking \u201CRequest My Free Consultation\u201D, you are providing your electronic signature, voluntarily authorizing Trafford Publishing and its affiliates to contact you using a manual or automated telephone dialing system and send you advertisement or telemarketing messages by email or text/SMS/MMS message to the address and phone number you have provided above. You are not required to agree to this in order to buy products or services from Trafford Publishing. You certify that you are over the age of eighteen (18). You\u2019ll get up to ten (10) messages per month. Standard message and data rates may apply. Click here to view our ",
                                    React.createElement("a", { href: "javascript(0);" }, "privacy policy"),
                                    "."))))))),
        React.createElement("div", { className: "channels-section" },
            React.createElement("div", { className: "channel-header" },
                React.createElement("p", null, "AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS")),
            React.createElement("div", { className: "channels-body" },
                React.createElement("div", { className: "amazon-kindle" },
                    React.createElement(image_component_1["default"], { src: Amazon_Kindle_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "barnes-noble" },
                    React.createElement(image_component_1["default"], { src: barnes___noble_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "chapters" },
                    React.createElement(image_component_1["default"], { src: chapters_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "indigo" },
                    React.createElement(image_component_1["default"], { src: indigo_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "ingram" },
                    React.createElement(image_component_1["default"], { src: ingram_png_1["default"], alt: "..." })),
                React.createElement("div", { className: "lightning-source" },
                    React.createElement(image_component_1["default"], { src: lightning_source_png_1["default"], alt: "..." })))),
        React.createElement(footer_component_1["default"], null)));
};
exports["default"] = AboutUs;
