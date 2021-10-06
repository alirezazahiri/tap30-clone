// icons
import autopeyk from "../assets/tab-icons/cc-autopeyk.png";
import classic from "../assets/tab-icons/cc-classic.png";
import hamkhat from "../assets/tab-icons/cc-hamkhat.png";
import hamyar from "../assets/tab-icons/cc-hamyar.png";
import line from "../assets/tab-icons/cc-line.png";
import motopeyk from "../assets/tab-icons/cc-motopeyk.png";
import plus from "../assets/tab-icons/cc-plus.png";
import taxi from "../assets/tab-icons/cc-taxi.png";
import tel from "../assets/tab-icons/cc-tel.png";

// contents
import illi_autopeyk from "../assets/tab-contents/illus-autopeyk.webp";
import illi_classic from "../assets/tab-contents/illus-classic.webp";
import illi_hamkhat from "../assets/tab-contents/illus-hamkhat.webp";
import illi_hamyar from "../assets/tab-contents/illus-hamyar.webp";
import illi_line from "../assets/tab-contents/illus-line.webp";
import illi_motopeyk from "../assets/tab-contents/illus-motopeyk.webp";
import illi_plus from "../assets/tab-contents/illus-plus.webp";
import illi_taxi from "../assets/tab-contents/illus-taxi.webp";
import illi_tel from "../assets/tab-contents/illus-tel.webp";

const icons = [
  autopeyk,
  classic,
  hamkhat,
  hamyar,
  tel,
  line,
  motopeyk,
  plus,
  taxi,
];

const contents = [
  illi_autopeyk,
  illi_classic,
  illi_hamkhat,
  illi_hamyar,
  illi_tel,
  illi_line,
  illi_motopeyk,
  illi_plus,
  illi_taxi,
];

const titles = [
  "اتوپیک",
  "تپسی کلاسیک",
  "هم‌خط",
  "همیار",
  "تپسی تلفنی",
  "تپسی لاین",
  "موتوپیک",
  "تپسی پلاس",
  "تپسی تاکسی",
];

const texts = [
  "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.",
  "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
  "سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است.",
  "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
  "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.",
  "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
  "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
  "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.",
  "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
];

const tabs = icons.map((icon, index) => {
  return {
    id: `${index + 1}`,
    tabImg: icon,
    tabContent: contents[index],
    title: titles[index],
    text: texts[index],
  };
});

export default tabs;
