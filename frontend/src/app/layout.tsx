import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-colantialiased min-h-[100vh] border-[10px]`}
      >
        <header className="border-[2px] border-[red]">
          <a href="/">홈</a>
          <a href="/about">소개</a>
        </header>
        <main className="flex-grow border-[2px] border-[blue]">
          {children}
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            id in iste harum tempore officiis non sed delectus ad nemo eius,
            omnis placeat, unde blanditiis eos impedit labore adipisci commodi!
            Distinctio consequatur dicta ut vel quae excepturi, maiores
            aspernatur sed et laboriosam fugiat omnis ad sapiente quos quam
            molestias harum eum voluptatibus repellat. Culpa eum, ad sequi
            consectetur asperiores quos. Itaque soluta pariatur ex architecto
            nobis sapiente recusandae ratione saepe earum deleniti a
            perspiciatis non eveniet corrupti unde sunt voluptate, quae
            repudiandae facilis? Explicabo consequatur numquam exercitationem
            facere labore ipsum. Velit molestias sit veritatis atque? In debitis
            provident eos quam pariatur deleniti, laudantium recusandae neque
            repudiandae dolor soluta exercitationem delectus eius dolorum
            repellendus asperiores, id corporis deserunt aliquid architecto
            maiores. Laborum minima delectus magni amet accusamus facilis
            voluptates provident. Deserunt, nesciunt maxime quas labore laborum
            fugiat asperiores voluptatum ullam omnis voluptatibus dignissimos
            deleniti, ipsam reprehenderit optio. Dolorem in a perferendis? Nobis
            sint ratione perferendis alias exercitationem praesentium! Laborum
            aliquam ea quasi quae, inventore fuga dicta exercitationem,
            similique nemo omnis deleniti? Possimus voluptates minima aliquam
            ipsa illo iusto corrupti? Nulla, nesciunt. Quibusdam molestias sed
            aliquam autem voluptates? Molestias recusandae dignissimos pariatur?
            Quaerat voluptatum quidem placeat nobis quas modi reprehenderit,
            pariatur quia ratione natus quasi ea minus repellat blanditiis.
            Magnam, nostrum alias? Distinctio dolores quod voluptatibus
            repellendus tempora similique harum exercitationem unde! Architecto
            atque mollitia beatae ab voluptatum aliquid consectetur nulla iusto
            ipsum, sit, cumque, molestias sunt temporibus numquam corporis
            tempore quaerat? Nisi ratione voluptatum incidunt, vero magni ab
            praesentium ad a animi nulla reiciendis illo tempore aliquid
            perferendis veniam dolore maiores quia libero deleniti et ut?
            Voluptatum ab omnis dicta architecto! Est rerum voluptatibus laborum
            unde debitis voluptates placeat. Vero ipsa quod tempore voluptatum
            optio? Fuga in optio commodi obcaecati ullam quibusdam incidunt
            nihil! Consequatur dignissimos quos facere. Dolores, officiis quo!
            Aliquam possimus unde deleniti cumque? Culpa minus odit amet
            voluptate numquam suscipit impedit pariatur sint placeat sequi rem
            iure molestias, officiis vel? Laudantium neque maxime dolorum,
            sapiente dolores similique dolore. Facilis saepe similique ratione
            ullam aliquid quasi ducimus eius nulla explicabo beatae quia quae
            animi, minus, voluptas possimus sapiente consectetur repellat!
            Dolore placeat adipisci, dicta sint commodi ipsum consectetur
            perferendis! Dicta tenetur nostrum praesentium placeat corrupti!
            Consequuntur delectus praesentium odio fugiat reiciendis, at totam
            fuga sapiente impedit maxime repellat. Necessitatibus, beatae
            perspiciatis! At iste, dolorem eius officia iure facilis
            accusantium. Fugit incidunt tempora repellendus voluptatem placeat
            accusamus, expedita voluptate ratione est, accusantium ipsum, soluta
            culpa laudantium. Impedit atque, culpa cum nobis ipsam minus quasi
            perferendis amet, iste corrupti, vel modi. Veniam iure explicabo
            expedita distinctio non illum reprehenderit voluptatum
            exercitationem perferendis. Dignissimos deserunt quod illo eius,
            dicta delectus doloremque cum eum similique repudiandae ad dolorum
            nulla incidunt consectetur corrupti rem! Expedita debitis officia,
            accusamus asperiores laboriosam quae deserunt quam? Et voluptate
            molestias reiciendis aspernatur! Voluptate alias rerum ratione quos,
            a recusandae delectus quisquam dolores nisi exercitationem ad
            eligendi, omnis doloribus. Consequuntur, laborum provident.
            Exercitationem quasi excepturi tempore enim. Nemo exercitationem
            sequi neque veniam similique adipisci assumenda in distinctio
            laboriosam expedita repellat quaerat reiciendis sit minus, quo
            facere animi asperiores repellendus. Libero in deserunt voluptas
            nemo id cumque magnam esse. Accusamus cupiditate expedita odit
            laborum, quam animi neque reiciendis, in laboriosam dolorum labore
            impedit ex voluptatum sunt officia nostrum quasi ducimus! Nesciunt
            accusantium nobis voluptatibus, dolorem fugit inventore recusandae!
            Consequuntur magnam laborum laudantium accusamus aliquam quaerat
            laboriosam autem reprehenderit aspernatur, nesciunt omnis enim
            soluta a harum temporibus doloribus neque ducimus deleniti. Dolores,
            sit quasi delectus culpa iure excepturi consequatur aspernatur natus
            vel tempora odio laboriosam doloremque nostrum, omnis libero
            dolorum. Cumque iure ex ad nulla neque vitae dolore similique porro
            delectus. Debitis perspiciatis sed aut quia, quisquam architecto
            dolorem ipsam, quod, dolor adipisci neque ratione dolorum hic
            numquam ipsa aperiam exercitationem quam illo beatae praesentium
            reprehenderit! Facere repellendus ratione magni accusamus? Libero
            dignissimos vero at debitis, error doloribus eum veniam labore qui
            tempore saepe nesciunt, reiciendis culpa aliquid fugiat autem, vitae
            dolorum minus cum quo tenetur in totam enim quae. Suscipit! Eum
            voluptatibus odio quidem ipsum, repellat voluptatum sint inventore
            cumque quod voluptates eaque? Voluptas vero maxime expedita eius
            molestiae. Dignissimos similique modi nisi enim. Suscipit commodi
            quod tenetur repudiandae fugiat. Odio nobis iure nostrum, possimus
            illum vero consectetur laudantium eligendi qui dignissimos, incidunt
            velit modi necessitatibus tenetur quia eveniet autem omnis eum non
            reiciendis aliquid. Repellendus consequuntur ipsa accusantium sed!
            Magnam, velit illo tempore eius molestias ducimus omnis suscipit
            mollitia alias voluptatem tempora a non, vero explicabo minima
            consectetur quaerat sapiente aperiam cupiditate quasi veritatis
            corporis nesciunt nobis in! Voluptates. Reiciendis porro est at
            nihil sed odio eos ducimus! Vitae rem vero autem? Possimus
            voluptatibus inventore unde blanditiis, pariatur reprehenderit,
            culpa, recusandae cumque nostrum quibusdam repellat nam quisquam
            voluptatum laborum? Molestias tempore ea tempora. Eligendi quas
            natus possimus tempora, at dolores rem, veniam unde esse,
            praesentium harum maxime laboriosam dicta. Nihil sed quasi
            voluptatem nostrum necessitatibus molestias mollitia. Odit, tempora?
            Delectus at excepturi expedita obcaecati minus ab cum nam aut quod
            pariatur, quidem a. Debitis eligendi commodi est consectetur dolorum
            vero perspiciatis quia fuga sit ipsum. Provident itaque ducimus
            perspiciatis? Quis eos repudiandae et placeat quaerat numquam ipsum
            laboriosam tempore quisquam maiores laudantium eligendi nemo earum
            odio rem, est enim esse in? Ab soluta libero perferendis labore
            expedita omnis dignissimos. Mollitia non tempora culpa consequatur
            in soluta? Voluptates esse iure quos harum est aliquid ullam minus
            quae, rem facere omnis, atque fuga aliquam, reiciendis nesciunt
            dignissimos. Sapiente quaerat deserunt dolorum! Perspiciatis impedit
            cum porro vero distinctio veritatis hic et aspernatur reiciendis
            dolor. Amet vero fugiat ea, id possimus rerum atque est nam eligendi
            earum repudiandae ducimus illum a. Voluptatem, architecto. Dicta
            deleniti minus fugit fugiat eos laboriosam cumque corrupti placeat
            nesciunt odio iusto, asperiores ipsum cupiditate qui molestias
            ducimus, quae quia ipsam assumenda vitae quasi officiis impedit!
            Numquam, mollitia perferendis. Enim harum earum, debitis odit,
            architecto alias dignissimos reprehenderit ut maxime repellat odio
            quaerat necessitatibus sequi, quia natus! Labore asperiores at vel
            aliquid recusandae nemo debitis officiis minima sunt repellat.
            Voluptas, omnis! Magni dolorum quo tenetur corrupti alias, modi
            obcaecati officia incidunt, magnam reiciendis ipsum recusandae
            tempora laborum! Hic accusamus omnis neque quaerat. Accusamus totam
            amet exercitationem, odio quidem molestias. Delectus, hic natus
            dolorum laudantium nesciunt voluptatem saepe eos excepturi unde,
            consequatur aliquam culpa modi aspernatur quaerat quos dolore
            assumenda iure deleniti earum commodi. Non, laudantium cum.
            Reiciendis, aliquid consectetur. Soluta doloribus aspernatur eaque
            ab vitae, quia corrupti dolores quam nobis dignissimos dolore
            dolorem mollitia incidunt recusandae fugiat ut voluptatem culpa
            iusto iure? Cum aliquam debitis qui in. Dolorem, alias! Voluptas est
            fugit, qui, error quasi pariatur, quidem sapiente minus dicta
            laboriosam fuga dolorem ad laborum alias nulla illum reprehenderit
            harum. Quam ut vel eum, non minima illum perspiciatis vero! Vero
            reprehenderit officia deserunt quisquam sint adipisci nesciunt
            similique maxime odit perferendis. Necessitatibus dolor adipisci
            magni dolorem amet, voluptate facilis ratione sequi magnam ad
            doloribus officiis iure, aliquam perferendis harum. Est aliquid quas
            reprehenderit molestias, animi laborum voluptatum, ullam eum
            dolorem, accusantium minima. Rerum explicabo perspiciatis quidem
            iure modi harum non repellendus vel! Qui minima eveniet dolores
            excepturi nam numquam! Maiores doloribus deserunt eligendi, minima
            deleniti cumque vero facere soluta corporis fugiat eos, id ut
            sapiente dignissimos! A exercitationem deleniti veritatis debitis,
            reiciendis praesentium eos rem esse, earum minus dolorem. Sunt
            eligendi consectetur perferendis explicabo eaque sed illo in,
            exercitationem adipisci nisi quae cum unde autem animi rerum
            molestias veritatis magnam quod nam consequatur soluta hic. Earum ab
            iusto eos? Ipsum repudiandae nemo corrupti, dignissimos inventore
            eligendi amet, labore architecto dolore consectetur iusto. Qui
            nostrum perferendis, nam modi ipsam possimus, minima, maxime
            reprehenderit iure recusandae aspernatur dolores nobis magni
            corrupti! Eligendi molestiae quidem possimus quisquam distinctio,
            alias nihil rem officia earum repellendus ut, eum laborum modi
            inventore cupiditate amet nesciunt voluptatem exercitationem
            consequuntur quibusdam hic minus! Minima eos ullam ea. Fugit, nemo.
            Voluptatibus unde pariatur a ipsam nulla ullam natus fuga quam!
            Culpa magni ipsa harum suscipit quis placeat, ratione rerum animi
            pariatur voluptates eaque fuga repellendus blanditiis, ducimus esse!
            Blanditiis temporibus ea fugit ipsam delectus voluptates voluptatem!
            Molestiae, vel molestias. Nesciunt provident iure magni fugit ipsam
            necessitatibus praesentium tenetur sequi sint eaque aut est atque,
            sapiente porro facilis doloribus. Provident deleniti, incidunt
            expedita, placeat ratione inventore officia hic omnis accusantium
            libero dolores voluptatibus in harum ut numquam, vero dolorem
            delectus. Distinctio, sequi inventore est facilis illo eaque velit
            itaque? Atque laboriosam, corrupti molestias enim quia deserunt quam
            autem consequuntur omnis sunt! Temporibus, eaque sequi aut totam
            praesentium recusandae, beatae dolorum accusantium veniam eius, et
            facilis est saepe omnis minus? Ipsa illo nesciunt tempora, maiores
            dignissimos dolorum sunt voluptate hic fugiat incidunt quasi
            quibusdam blanditiis recusandae, eveniet exercitationem deserunt
            optio commodi ad quas soluta nisi molestias! Dolor quod inventore
            minima. Quisquam quod quaerat quae consequuntur repellendus,
            corrupti blanditiis error provident rerum culpa molestias amet
            cumque impedit sit, libero, earum ad laudantium placeat at
            perferendis ea delectus! Dolor doloribus doloremque dicta? Omnis,
            corporis dolores? Quidem rem ipsum, consequuntur nobis perferendis
            voluptatem repellendus optio aliquid, molestiae hic, est dolore!
            Ipsa voluptates, quo, explicabo cupiditate aut, consequuntur
            inventore itaque necessitatibus facere possimus magnam. Atque
            reiciendis ad perspiciatis voluptatum, hic sunt vero corrupti
            deleniti ea delectus doloribus laboriosam facere nam qui aliquam
            provident maxime enim architecto ducimus! Incidunt, aliquid? Natus,
            illo. Aut, sunt doloremque! Reprehenderit blanditiis nulla sequi
            rerum eum inventore nostrum odio rem nam, modi provident ea eos
            deserunt commodi magni dolorem quibusdam. Voluptas sed quo commodi,
            mollitia asperiores ex natus aperiam incidunt. Animi dignissimos
            quam veritatis, tempora atque molestiae ut officiis magnam obcaecati
            nulla labore aliquam quis. Hic labore deserunt amet et, modi sequi
            laborum placeat eaque architecto neque enim repellat iste! Sint,
            delectus? Aspernatur sequi deserunt, ipsam necessitatibus earum
            similique itaque non minima sit quibusdam magnam! Totam quaerat
            similique temporibus, dicta praesentium architecto corporis tempora
            fugit perspiciatis, quibusdam perferendis, voluptatem eaque. Natus
            blanditiis ab in? Veniam ex ducimus, nulla explicabo dignissimos
            sint illum id repellat et at sit eveniet inventore nesciunt quo,
            dolores eligendi placeat animi laborum quae recusandae sequi itaque?
            Ut velit dolorem impedit est, fuga nostrum autem reiciendis neque
            earum sit corporis maxime eaque et sapiente debitis voluptas
            blanditiis veritatis cum, excepturi aut dolorum tenetur alias nemo
            quaerat. Reiciendis! Reiciendis nam ad, aut reprehenderit placeat
            voluptas quos, sunt totam incidunt deleniti culpa ipsum possimus,
            sed tempora inventore quasi neque ullam modi itaque quod delectus
            fugiat? Ullam debitis quibusdam eius. Aliquid laborum, sed modi
            maxime ipsam alias, animi pariatur voluptatibus porro velit facere
            architecto magni veniam dolor sit recusandae, voluptatum suscipit
            esse expedita quaerat. Exercitationem illo laudantium dolore
            praesentium nobis! Quidem ipsam ullam ex quasi, laboriosam omnis
            placeat quod alias quia voluptatum, quas repellat eius sed, beatae
            optio dolores reiciendis quos. Fuga quasi magni officiis animi eos
            porro optio obcaecati. Maiores dicta magni, dignissimos iste velit
            sapiente iusto, expedita asperiores quam, doloribus delectus
            deserunt eius non consequuntur assumenda nemo doloremque at
            possimus. Quasi iure provident quisquam dolores accusamus molestiae
            esse. Cupiditate repudiandae porro culpa consequuntur vel recusandae
            id non rem officiis repellat amet nisi corrupti commodi eos
            excepturi, similique voluptatibus. Amet, corrupti facilis quibusdam
            perspiciatis nihil at doloremque odio sapiente! Assumenda neque
            praesentium nam laudantium doloremque dolor totam soluta blanditiis
            quam expedita, odit modi ullam at. Ex reiciendis nobis maxime
            temporibus ipsum, laborum eligendi, odit incidunt, quos dolorem
            rerum rem. Dicta, suscipit unde. Praesentium minus temporibus
            recusandae quidem eaque id voluptatibus sint, aliquam provident
            totam, voluptates at magnam facere ad quos rem optio! Possimus,
            alias praesentium! Obcaecati a ratione labore! Autem eaque beatae
            veniam asperiores cupiditate obcaecati maxime corrupti dolores,
            fugiat illum sint nesciunt. Voluptatem, commodi laborum amet dolor
            impedit quod totam sunt velit ut dicta a, minus, accusantium ex.
            Ipsam inventore, quam ad reprehenderit vitae error officia
            consectetur consequatur, harum quis molestiae excepturi, eos debitis
            culpa adipisci dignissimos quas qui mollitia perferendis voluptas
            accusantium sint. Nobis minus illo ex. Explicabo ratione iure vitae
            nostrum quibusdam odio quae deleniti quia autem incidunt labore
            corrupti doloremque atque, ipsa laborum dolores illum? Perspiciatis
            explicabo sint impedit molestiae praesentium laborum, eligendi eius
            inventore! Cumque reprehenderit libero voluptatum nihil quaerat
            earum quod, assumenda ullam harum architecto aspernatur, labore a
            vitae omnis? Beatae, voluptate, fugiat rem, voluptates possimus
            voluptatem sapiente voluptatum id facere repellat adipisci. Quasi
            quia eos doloremque explicabo deserunt voluptatibus voluptatem
            animi, ullam eum ipsum magni quas alias cupiditate architecto a, ad
            sunt maxime repellat quibusdam, distinctio dolorem dignissimos
            dicta. Labore, modi earum! Modi inventore repellendus in, officiis
            eos laudantium, quisquam, temporibus deserunt fugit excepturi quis
            natus explicabo iure ea maxime quam consequuntur ipsam eligendi!
            Minus eligendi blanditiis illum cumque beatae autem harum. Quia
            porro laudantium in quasi facere sed eos placeat sint, obcaecati
            laborum illum voluptate magnam. Voluptatum dolorum sapiente maxime
            dicta incidunt tempora impedit magni totam vel! Nostrum veritatis
            dicta illum! Accusantium eveniet, vel explicabo aliquam voluptate
            eaque alias deserunt aliquid reiciendis repellendus ad, aut nulla
            laboriosam voluptatibus soluta rem minima sed! Delectus officia esse
            aperiam tenetur ab enim dignissimos incidunt. Quasi, officiis
            quibusdam voluptatibus error officia nesciunt voluptas omnis beatae
            explicabo quaerat libero delectus! Blanditiis dolor rem amet ipsum,
            assumenda nihil nemo quasi illo et doloribus ipsa pariatur,
            molestiae aliquam! Aperiam dolore adipisci quam cumque inventore,
            corporis velit eligendi quaerat distinctio beatae ad libero,
            praesentium tempora autem quisquam laudantium impedit
            exercitationem, fugiat aut eveniet voluptatem magni soluta odio
            iure? Atque? Explicabo animi commodi, minus eos maiores ea ipsum
            quibusdam earum, quis, aliquam reprehenderit veniam voluptatum ullam
            architecto ipsam eius similique. Nulla ducimus nam quibusdam
            laboriosam placeat inventore beatae, aliquam voluptatum? Sed est
            iste natus consequatur placeat omnis ullam architecto? Delectus
            eligendi excepturi eum. Quos quisquam repudiandae, dolores quis
            recusandae illo perferendis alias eaque. Atque sit inventore
            corporis, ipsam animi dolorem! Asperiores dolores ex eum reiciendis,
            earum eaque alias repudiandae ducimus. Fuga optio ducimus aperiam
            asperiores? Assumenda aperiam excepturi animi maxime nemo sequi
            beatae, adipisci at vitae, odio unde obcaecati? Vel! Officiis magnam
            et maiores saepe, quasi reiciendis voluptatum alias iusto
            dignissimos consequuntur dolor dicta adipisci ea eveniet ipsam.
            Deleniti eligendi tempora dolore repellendus sunt iste molestias
            aperiam dolor explicabo nihil? Accusantium sunt ad, vitae eligendi
            placeat consectetur, explicabo porro, earum ex aliquam accusamus!
            Distinctio alias exercitationem at eaque nemo ex ipsum soluta ipsa
            velit. Ut possimus tempora nesciunt maxime sequi. Quia delectus,
            molestiae velit voluptatum, fuga molestias unde ad illum quae
            ratione iusto, architecto iste amet? Veritatis sequi ea cumque atque
            ad, quis placeat. Labore ducimus modi asperiores earum ex. Iure,
            labore expedita! Voluptatem laborum et at quidem mollitia impedit
            repudiandae a adipisci dolorem voluptates magnam veritatis corporis,
            neque odit odio natus accusantium obcaecati cum officiis? Ratione
            quos optio sed! Impedit qui nobis recusandae, quo sapiente aliquid
            reiciendis ea consectetur nemo quas quae voluptates sit eos
            aspernatur soluta mollitia cupiditate at eaque incidunt. Harum ipsam
            incidunt vel illum consectetur tenetur! Non quaerat, modi sequi
            impedit quo quam. Beatae impedit obcaecati distinctio iste ducimus
            quos, qui dignissimos sequi architecto cupiditate, est iure rerum
            possimus rem repudiandae laudantium dicta exercitationem suscipit
            nulla! Rem eum quis atque deserunt dolores quam autem? Maiores, hic
            quasi. Ab iste, itaque nobis ipsum magnam tempore fuga assumenda
            dolores rem maiores alias quo quibusdam voluptates eius!
            Repellendus, aliquam. Impedit dolore, sequi cumque quasi enim, quas
            numquam earum architecto quibusdam natus amet id voluptate
            voluptatibus ad vel a dolores non. Et vero, totam animi soluta eos
            molestias labore explicabo. Quas fuga fugit fugiat soluta quasi?
            Officia quas earum facere impedit quisquam quasi at expedita eaque
            quia aut accusamus numquam, pariatur magnam asperiores rerum
            provident cupiditate eius placeat voluptatibus aliquam. Temporibus
            optio tempora laboriosam? Sapiente earum error nihil laudantium
            voluptatem laboriosam, qui facere veniam minus debitis, iure ipsa
            fugit illo eius dolorum modi culpa. Dicta aliquam impedit veritatis
            tempora consectetur. Quasi, sit quis. Quaerat ipsum temporibus a
            libero illo sed maiores nesciunt rerum, excepturi molestias culpa
            sunt quos est odit soluta magni officia architecto similique. Odio
            officiis illo nesciunt nulla? Eius nisi eveniet perferendis ducimus
            veritatis molestias deserunt? Quam consequatur omnis vero architecto
            quidem similique fuga nobis autem, porro vel maiores cumque neque
            voluptates laudantium facilis explicabo? Impedit, sapiente a. Earum
            inventore omnis, ut id cumque et dolorem quia, laborum numquam culpa
            in facilis, officia natus odio assumenda necessitatibus autem
            corporis tenetur facere aut! Alias assumenda provident eveniet dolor
            porro. Et sunt id velit! Molestias asperiores architecto nam quos
            odit eligendi dignissimos eveniet delectus iste, ea laudantium
            accusantium aperiam possimus assumenda omnis atque inventore quas
            laborum adipisci illum necessitatibus reprehenderit? Quis rem minima
            mollitia nihil unde libero optio. Reprehenderit molestias corrupti
            enim distinctio voluptas odio nostrum. Ad, quasi! Sit harum dolore
            magnam corrupti natus dolores esse nostrum, reprehenderit quisquam
            itaque. Velit esse reiciendis, minus laudantium illum, maiores ipsam
            cupiditate dolorum recusandae incidunt dicta dolor! Ullam, at! Iste
            itaque, molestias ipsum possimus dolore sed aperiam nihil, vel
            repellat eius asperiores ratione! Facere quae culpa ipsum
            dignissimos enim, quia corrupti et eos vitae ullam cumque natus,
            commodi repudiandae voluptas beatae unde nemo ipsa quasi atque id.
            Dolore sint consectetur temporibus sed quibusdam! Mollitia aliquam
            nemo officia quo, dicta maiores quaerat accusamus, veniam beatae
            ducimus sequi fugit qui hic quae asperiores magni eius velit ab
            facere autem soluta cumque ipsum voluptatibus? Error, ipsa. Facilis
            libero a ducimus quos expedita! Commodi aliquam suscipit iure quos
            temporibus aspernatur tempora, similique incidunt eos sit
            voluptatibus, atque facere non eligendi fuga eveniet aliquid ad
            necessitatibus ipsum ducimus? Asperiores corrupti voluptates
            aliquam, rerum natus harum obcaecati ullam velit. Dolorem quas
            aliquid, voluptate doloremque saepe magni fugiat vero, natus veniam
            pariatur similique aliquam sed. Ut ipsa magnam eaque quod. Quos
            sunt, ducimus doloribus voluptatibus sit sapiente nihil officiis, a
            maxime possimus beatae quae, soluta est! Sit dolorum soluta omnis?
            Corrupti quo voluptates recusandae maiores repellat provident porro
            officia non? Enim accusamus consequatur dolorem nesciunt cum quae
            delectus similique ea, provident perspiciatis ducimus pariatur quos
            nisi. Ad adipisci neque autem animi molestias in velit. Ducimus ex
            necessitatibus quas cupiditate quod. Ab aperiam molestiae beatae
            voluptatem culpa provident nemo ex magnam totam est velit suscipit
            perferendis sunt eum sapiente architecto, veritatis sequi ipsum ut.
            Enim atque quasi illo omnis nisi magni! Et architecto eum
            asperiores, reiciendis praesentium ad mollitia doloribus a
            accusantium dolore nam beatae nesciunt sed sapiente labore magni
            esse impedit necessitatibus dignissimos soluta in ipsum perspiciatis
            error ex? Nulla.
          </div>
        </main>
        <footer className="border-[2px] border-[pink]">Copyright 2025</footer>
      </body>
    </html>
  );
}
