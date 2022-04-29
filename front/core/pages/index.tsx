import Layout from '../styles/Layout'
import Image from 'next/image'
import Link from 'next/link'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const AddressMapMedium = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2304034959584!2d139.70667971525262!3d35.67132838019654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d03cf22d88f%3A0xebee27411fb235b0!2sPocky%20SALON%20%26%20STORE!5e0!3m2!1sen!2sjp!4v1609301088764!5m2!1sen!2sjp"
        width="600"
        height="450"
      ></iframe>
    </div>
  )
}

const AddressMapSmall = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2304034959584!2d139.70667971525262!3d35.67132838019654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d03cf22d88f%3A0xebee27411fb235b0!2sPocky%20SALON%20%26%20STORE!5e0!3m2!1sen!2sjp!4v1609301088764!5m2!1sen!2sjp"
        width="320"
        height="222"
      ></iframe>
    </div>
  )
}

const IndexPage = () => (
  <Layout title="Pocky SALON & STORE">
    <section className="Wrapper">
      <section className="Menu">
        <div className="Reservation">
          <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
            <Image
              className="classname"
              src="/icons/cut-outline.svg"
              alt="cut-icon"
              width={20}
              height={20}
            ></Image>
          </Link>
          <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
            <p>Reservation</p>
          </Link>
        </div>
        <div className="Instagram">
          <Link href="https://www.instagram.com/denimyarou/?hl=en">
            <Image
              src="/icons/logo-instagram.svg"
              alt="instagram-icon"
              width={20}
              height={20}
            ></Image>
          </Link>
          <Link href="https://www.instagram.com/denimyarou/?hl=en">
            <p>Instagram</p>
          </Link>
        </div>
        <div className="Store">
          <Link href="https://pocky2020.base.ec/">
            <Image
              src="/icons/shirt.svg"
              alt="store-icon"
              width={20}
              height={20}
            ></Image>
          </Link>
          <Link href="https://pocky2020.base.ec/">
            <p>Online Store</p>
          </Link>
        </div>
        <div className="About">
          <Link href="/About">
            <Image
              src="/icons/store-icon.svg"
              alt="about-icon"
              width={20}
              height={20}
            ></Image>
          </Link>
          <Link href="/About">
            <p>About</p>
          </Link>
        </div>
      </section>

      <section className="Core">
        <div className="Dog">
          <Image
            src="/images/pocky-logo.jpg"
            alt="pocky-logo"
            width={500}
            height={500}
          ></Image>
        </div>

        <div className="Chevron">
          <Image
            src="/icons/chevron-down-outline.svg"
            alt="chevron-down-icon"
            width={50}
            height={50}
          ></Image>
        </div>

        <div className="Photo">
          <AwesomeSlider
            organicArrows
            media={[
              {
                source: 'images/front.JPG',
              },
              {
                source: 'images/door-zoomed.JPG',
              },
              {
                source: 'images/gallery.JPG',
              },
              {
                source: 'images/shirt.JPG',
              },
            ]}
          />
        </div>
        <div className="Welcome">
          <Image
            src="/images/welcome.jpg"
            alt="welcome-image"
            width={470}
            height={250}
            objectFit="cover"
          ></Image>
        </div>
        <div className="Map">
          <div className="MapSmall">
            <AddressMapSmall />
          </div>
          <div className="MapBig">
            <AddressMapMedium />
          </div>
        </div>

        <div className="Info">
          <text>
            〒150-0001
            <br />
            東京都渋谷区神宮前3丁目27-14
            <br />
            Owner
            <br />
            Hiromu Yamada
            <br />
            山田 大夢
            <br />
            denimyarou@gmail.com
            <br />
            03-6447-4030
            <br />
            OPEN 11:00 - 21:00
          </text>
        </div>
      </section>
    </section>
  </Layout>
)

export default IndexPage
