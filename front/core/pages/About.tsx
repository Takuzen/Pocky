import Layout from '../styles/Layout'
import Image from 'next/image'

const About = () => (
  <Layout title="About">
    <div className="AboutContainer">
      <div className="AboutPage">
        <div className="AboutImage">
          <Image
            src="/images/pocky-about-img.JPG"
            alt="pocky-about-img"
            width={500}
            height={300}
          ></Image>
        </div>
        <div className="AboutContent">
          <p className="b">
            “About a Pocky SALON & STORE…” Established in Tokyo 2020
          </p>
          <br />
          <br />
          <p>
            <p>
              Hair Salon,Used Vintage & Original Clothing,Skateboards,Cactus
            </p>
            <p>
              美容師として働く傍ら、アメリカのオレゴン州ポートランドに何度も1人旅を敢行し、
              スケートボードを通じてたくさんの仲間と出会いながら交友を広めていった店主が
              親しくなった友人の手掛けるスケートボードブランドや洋服、現地で買い付けたヴィンテージ古着
              オリジナルで製作しているアパレル商品やサボテンも販売している
            </p>
            <p>
              今までにない新しいスタイルの店舗を
              2020年11月1日、原宿にオープンさせました。
            </p>
            <p>
              自分の好きな物だけを詰め込んで、刺激を受けたアメリカ北西部らしいスタイルも感じられる
              唯一無二であり、友達の家の様な、どこか落ち着けて居心地の良い空間にもなっています
              サロンとしてのご利用は勿論、お買い物をしにくるだけでも
              どなた様でも是非お気軽にご来店下さい！
            </p>
            <br />
            <br />
            “Welcome homie!”
            <br />
            <br />
            <p>Owner</p> <p>山田大夢</p>{' '}
            <p>1987年6月6日生まれ 東京都江戸川区出身 双子座のA型</p>
            <p>小中高は野球一筋 山野美容専門学校卒</p>
            <p>都内2店舗を経て、フリーランス美容師として活動後、独立。</p>
            <br />
            <br />
            <p>
              ・得意な技術 /
              スパイラルパーマ、ハイライト、ボブカット、メンズカット
            </p>
            <p>
              ・お気に入りの古着 / 50s Schott Riders Jacket “リボンタグ” 、60s
              TOWNCRAFT Rayon Shirt “Black”、90s BUTTHOLE SURFERSのTシャツ
            </p>
            <p>・好きなサボテン / 吹雪柱、ヒルデウィンテラ・カラデモノニス</p>
            <p>・Favorite trick / F/S Smith Grind</p>
            <br />
            <br />
            <p>〈 予約キャンセルについて 〉</p>
            止むを得ない理由を除いて、当日キャンセルの場合、予約メニュー料金の70%、無断キャンセルの場合、予約メニュー料金の100%を頂きます。予めご了承下さい。
            <br />
            <br />
            <p>〈 商品の返品、交換、返金について 〉</p>
            ヴィンテージ、古屋の商品については、原則として返品、交換、返金は承っておりません。
            コンディション、サイズ等をお確かめの上、ご購入して頂きます様お願い致します。
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
