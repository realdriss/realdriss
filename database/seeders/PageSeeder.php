<?php

namespace Database\Seeders;

use RealDriss\Base\Models\MetaBox as MetaBoxModel;
use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Page\Models\Page;
use RealDriss\Slug\Models\Slug;
use Faker\Factory;
use Html;
use Illuminate\Support\Str;
use SlugHelper;

class PageSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        $pages = [
            [
                'name'     => 'Home',
                'content'  =>

                Html::tag(
                    'div', 
                    '[simple-slider key="home-slider"][/simple-slider]'
                ) .

                Html::tag(
                    'div',
                    '[featured-product-categories title="Top Categories" subtitle="Most popular product categories on our service."][/featured-product-categories]'
                ) .

                Html::tag(
                    'div', 
                    '[flash-sale title="Best deals for you."][/flash-sale]'
                ) .

                Html::tag(
                    'div',
                    '[product-collections title="Exclusive Products"][/product-collections]'
                ) .

                Html::tag(
                    'div',
                    '[banners image1="general/b-1.jpg" url1="/product-categories/headphone" image2="general/b-2.jpg" url2="/product-categories/camera" image3="general/b-3.jpg" url3="/product-categories/watches"][/banners]'
                ) .

                Html::tag(
                    'div',
                    '[trending-products title="Trending Products"][[/trending-products]'
                ) .

                Html::tag(
                    'div', 
                    '[product-blocks featured_product_title="Featured Products" top_rated_product_title="Top Rated Products" on_sale_product_title="On Sale Products"][/product-blocks]'
                ) .

                Html::tag(
                    'div',
                    '[featured-brands title="Our Brands"][/featured-brands]'
                ) .

                Html::tag(
                    'div', 
                    '[featured-news title="Explore Our Blog" subtitle="We share posts related to our product features and related content."][/featured-news]'
                ) .

                Html::tag(
                    'div', 
                    '[testimonials title="In their own words..."][/testimonials]'
                ) .

                Html::tag(
                    'div', 
                    '[our-features icon1="flaticon-shipped" title1="Delivery policy" subtitle1="Free delivery on orders within Eldoret town or orders above Ksh. 1,000." icon2="flaticon-money-back" title2="Return policy" subtitle2="Return an order within a span of 3 days after delivery." icon3="flaticon-support" title3="Customer support" subtitle3="Contact us anytime via chat or phone."][/our-features]'
                ) .
                
                Html::tag(
                    'div', 
                    '[newsletter-form title="Subscribe to our email list." subtitle="To stay informed on new offers and other amazing deals."][/newsletter-form]'
                ),
                
                'template' => 'homepage',
                'user_id'  => 1,
            ],
            [
                'name'     => 'Contact us',
                'content'  => Html::tag('p', '[contact-form][/contact-form]'),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'     => 'Blog',
                'content'  => Html::tag('p', '---'),
                'template' => 'blog-sidebar',
                'user_id'  => 1,
            ],
            [
                'name'     => 'About us',
                'content'  => Html::tag('p', 'A decentralized e-commerce platform with an embedded blockchain that provides a safer, faster and scalable marketplace for buyers and sellers to create, list and exchange value conveniently.'),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'     => 'FAQ',
                'content'  => Html::tag('p', $faker->realText(500)),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'     => 'Location',
                'content'  => Html::tag('p', $faker->realText(500)),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'     => 'Affiliates',
                'content'  => Html::tag('p', $faker->realText(500)),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'     => 'Brands',
                'content'  => Html::tag('p', '[all-brands][/all-brands]'),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'     => 'Cookie Policy',
                'content'  =>   

                Html::tag(
                    'h3', 
                    'EU Cookie Consent'
                ) .

                Html::tag(

                    'p', 
                    'To use this Website we are using Cookies and collecting some Data. To be compliant with the EU GDPR we give you to choose if you allow us to use certain Cookies and to collect some Data.'
                ) .

                Html::tag(
                    'h4', 
                    'Essential Data'
                ) .

                Html::tag(
                    'p', 
                    'The Essential Data is needed to run the Site you are visiting technically. You can not deactivate them.'
                ) .

                Html::tag(
                    'p', 
                    '- Session Cookie: PHP uses a Cookie to identify user sessions. Without this Cookie the Website is not working.'
                ) .

                Html::tag(
                    'p', 
                    '- XSRF-Token Cookie: Laravel automatically generates a CSRF "token" for each active user session managed by the application. This token is used to verify that the authenticated user is the one actually making the requests to the application.'
                ),

                'template' => 'default',
                'user_id'  => 1,
            ],

            [
                'name'     => 'Our business plan',
                'description'=> 'RealDriss unfinished business plan.',
                'content'  => Html::tag('div', '
                    <p style="text-align: justify;"><strong>Executive Summary</strong><br /><br />We focus on establishing a decentralized service that will utilize peer liquidity to provide a safer, faster, and scalable platform for buyers and sellers to create, list and exchange value effortlessly. The primary objective of our business is to offer a decentralized alternative to traditional centralized platforms, which are often plagued by security risks and scalability issues. <br /><br />We leverage the power of peer liquidity to create a decentralized network that allows for seamless and instant transactions. The platform is built using advanced encryption technologies and smart contracts to ensure secure and tamper-proof transactions. <br /><br />The target market for our platform includes businesses of all sizes and individual users who seek a more efficient and secure way to exchange value. Our business model is based on transaction fees, that users will incur for using the platform.<br /><br /><strong>Marketing and Sales Strategy</strong><br /><br />The marketing strategy involves reaching out to potential users and businesses through various digital marketing channels. The marketing efforts are focused on highlighting the benefits of using a decentralized platform, such as increased security, scalability, and efficiency.<br /><br />The sales strategy involves offering competitive transaction fees and providing excellent customer service to ensure customer satisfaction. Additionally, the platform is designed to be user-friendly and accessible to users of all technical skill levels.<br /><br /><strong>Operations and Management</strong><br /><br />We are comprised of an experienced team of developers tasked with the design and maintainance of the platform\'s infrastructure. The team is responsible for ensuring the platform is secure, scalable, and user-friendly. <br /><br />The management team oversees the day-to-day operations of our business as well as developing and implementing the marketing and sales strategies. Additionally, the management team ensures that we are profitable by monitoring transaction fees and adjusting pricing as needed.<br /><br /><strong>Financial Plan</strong><br /><br />The financial plan is based on transaction fees. We charge a percentage fee for each transaction made on the platform. The fee is competitive with traditional centralized platforms to attract users and businesses to the platform.<br /><br />The startup costs for our business primarily consists of infrastructure and development costs. As the business grows, additional costs may include marketing and advertising expenses, and additional staffing.<br /><br /><strong>Conclusion</strong><br />We are developing a decentralized service that utilizes peer liquidity to provide a safer, faster, and scalable platform for buyers and sellers to create, list, and exchange value effortlessly. With the growing demand for decentralized solutions, our goal is to become a frontier in bringing the benefits of decentralized value exchange closer to customers in Kenya. By bridging the gap that exists between buyers and sellers with our user-friendly, multi-feature rich, secure and scalable platform. We aim to attract a wide range of customers and businesses alike while generating a sustainable revenue stream through transaction fees.<br /><br />
                    </p>
                    '),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'      =>  'The RealDriss whitepaper',
                'description'=> 'A technical description of RealDriss infrastructure\'s internals',
                'content'   =>  Html::tag('div','
                    <p style="text-align: justify;"><strong>Introducing a Decentralized Service for Safer and Faster Value Exchange</strong><br /><br />In the digital age, buyers and sellers are constantly seeking more efficient and secure ways to exchange value. To meet this need, a new decentralized service has been developed that utilizes peer liquidity to provide a safer, faster, and more scalable platform for value exchange.<br /><br />This innovative platform enables buyers and sellers to create and list value without the need for intermediaries or centralized systems. By leveraging the power of peer liquidity, the platform allows for seamless and instant transactions, ensuring a hassle-free experience for all users.<br /><br />One of the key benefits of this decentralized service is its enhanced security. By removing the need for intermediaries, the platform eliminates the risk of third-party data breaches, hacks, and other security threats. Additionally, the platform uses advanced encryption technologies and smart contracts to ensure that transactions are secure and tamper-proof.<br /><br />Another advantage of this decentralized service is its scalability. With no centralized infrastructure to slow down the process, the platform can handle a high volume of transactions, making it ideal for businesses of all sizes. This also means that buyers and sellers can exchange value with ease, regardless of the size of the transaction.<br /><br />In conclusion, the decentralized service utilizing peer liquidity is a game-changer in the world of value exchange. By providing a safer, faster, and more scalable platform, buyers and sellers can exchange value effortlessly, without the need for intermediaries or centralized systems. As businesses continue to seek out more efficient ways to exchange value, this innovative platform is poised to become a frontier.
                    </p>
                    '),
                'template'  => 'default',
                'user_id'   => 1,
            ],
            [
                'name'     => 'Our technology stack',
                'description'=> 'The technologies RealDriss uses to build its infrastructure.',
                'content'  => Html::tag('div', '
                    <p style="text-align: justify;">A decentralized service for buyers and sellers to create, list, and exchange value effortlessly requires several key technologies, including:<br /><br />1. <strong>Blockchain:</strong> The platform uses a blockchain-based infrastructure to provide a transparent and immutable record of all transactions.<br /><br />2. <strong>Smart Contracts:</strong> Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. The platform uses smart contracts to automate transactions and eliminate intermediaries.<br /><br />3. <strong>Cryptocurrencies:</strong> The platform uses cryptocurrencies as a means of payment, allowing for faster and more secure transactions.<br /><br />4. <strong>Decentralized Storage:</strong> The platform uses decentralized storage solutions to store data securely and ensure data availability.<br /><br />5. <strong>Distributed Consensus Mechanism:</strong> A distributed consensus mechanism is used to ensure that transactions are verified and recorded on the blockchain in a secure and transparent way.<br /><br />6. <strong>User Interface:</strong> The platform requires a user interface that provides an easy-to-use and intuitive experience for buyers and sellers to create, list, and exchange value.<br /><br />Overall, a decentralized service for buyers and sellers to create, list, and exchange value effortlessly requires a combination of blockchain, smart contracts, cryptocurrencies, decentralized storage, distributed consensus mechanism, and user interface to create a transparent, secure, and efficient platform.
                    </p>
                    '),
                'template' => 'default',
                'user_id'  => 1,
            ],
            [
                'name'      =>  'Our value proposition',
                'description'=> 'The benefits and problems RealDriss is trying to solve.',
                'content'   =>  Html::tag('div','
                    <p style="text-align: justify;">A decentralized service for buyers and sellers to create, list, and exchange value effortlessly offers several benefits:<br /><br /><strong>1. Efficiency:</strong> The platform eliminates intermediaries, reducing transaction fees and processing times, making it more efficient for buyers and sellers to transact.<br /><br /><strong>2. Transparency:</strong> The platform uses blockchain technology, which provides a transparent and immutable record of all transactions, making it easy for buyers and sellers to track their transactions.<br /><br /><strong>3. Security:</strong> The platform eliminates security risks associated with centralized marketplaces, such as data breaches, fraud, and hacking attacks.<br /><br /><strong>4. Global reach:</strong> The platform allows buyers and sellers from all over the world to transact without any geographical limitations, increasing their access to global markets.<br /><br /><strong>5. Flexibility:</strong> The platform offers a flexible way for buyers and sellers to create and list products and services, allowing them to tailor their offerings to meet their specific needs.<br /><br />Overall, a decentralized service for buyers and sellers to create, list, and exchange value effortlessly offers a more efficient, transparent, and secure way for buyers and sellers to transact, providing them with more opportunities to reach a global market and tailor their offerings to meet specific needs.
                    </p>
                    '),
                'template'  => 'default',
                'user_id'   => 1,
            ]
        ];

        Page::truncate();
        Slug::where('reference_type', Page::class)->delete();
        MetaBoxModel::where('reference_type', Page::class)->delete();

        foreach ($pages as $index => $item) {
            $page = Page::create($item);

            Slug::create([
                'reference_type' => Page::class,
                'reference_id'   => $page->id,
                'key'            => Str::slug($page->name),
                'prefix'         => SlugHelper::getPrefix(Page::class),
            ]);
        }
    }
}
