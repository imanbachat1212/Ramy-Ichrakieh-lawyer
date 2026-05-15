import blog1Img from "../images/maktab.jpg";
import blog2Img from "../images/profile.jpg";
import blog3Img from "../images/team2.jpg";

const blogs = [
  {
    id: 1,
    slug: "your-legal-rights-in-lebanon",
    image: blog1Img,
    dateEn: "March 10, 2024",
    dateAr: "١٠ مارس ٢٠٢٤",
    authorEn: "Ramy Ichrakieh",
    authorAr: "رامي إشراقية",
    categoryEn: "Legal Rights",
    categoryAr: "الحقوق القانونية",
    titleEn: "Understanding Your Legal Rights in Lebanon",
    titleAr: "فهم حقوقك القانونية في لبنان",
    excerptEn:
      "Navigating the Lebanese legal system can be complex. Learn about your fundamental rights and how our firm can help protect them.",
    excerptAr:
      "قد يكون التعامل مع النظام القانوني اللبناني أمرًا معقدًا. تعرّف على حقوقك الأساسية وكيف يمكن لمكتبنا مساعدتك في حمايتها.",
    contentEn: [
      {
        type: "paragraph",
        text: "The Lebanese legal system is built upon a combination of civil law traditions inherited from the French mandate era and elements of Islamic jurisprudence. Understanding your rights within this system is the first step toward protecting yourself, your family, and your business.",
      },
      {
        type: "heading",
        text: "The Right to Legal Representation",
      },
      {
        type: "paragraph",
        text: "Every individual accused of a crime or involved in a civil dispute has the right to be represented by a qualified attorney. This right is enshrined in the Lebanese Constitution and is a cornerstone of the justice system. At Ishraqieh Law Firm, we ensure that every client receives dedicated, professional representation regardless of the complexity of their case.",
      },
      {
        type: "quote",
        text: "Justice is not a privilege — it is the right of every person who walks through our doors.",
        cite: "Ramy Ichrakieh – Founder",
      },
      {
        type: "heading",
        text: "Civil and Criminal Proceedings",
      },
      {
        type: "paragraph",
        text: "In civil matters — such as property disputes, family law, and contracts — Lebanese courts follow a structured procedure that allows both parties to present their case. In criminal proceedings, the accused is presumed innocent until proven guilty, and has the right to know the charges against them, to remain silent, and to contest evidence.",
      },
      {
        type: "paragraph",
        text: "Our firm has over 60 years of experience navigating both civil and criminal courts across Lebanon. We handle cases from the initial consultation all the way through appeals, ensuring your interests are defended at every stage.",
      },
      {
        type: "heading",
        text: "How We Can Help",
      },
      {
        type: "paragraph",
        text: "Whether you are facing criminal charges, involved in a business dispute, or seeking to protect your property and family rights, the Ishraqieh Law Firm is here for you. Contact us today for a confidential consultation with one of our expert attorneys.",
      },
    ],
    contentAr: [
      {
        type: "paragraph",
        text: "يقوم النظام القانوني اللبناني على مزيج من تقاليد القانون المدني الموروثة من حقبة الانتداب الفرنسي وعناصر من الفقه الإسلامي. إن فهم حقوقك ضمن هذا النظام هو الخطوة الأولى نحو حماية نفسك وعائلتك وأعمالك التجارية.",
      },
      {
        type: "heading",
        text: "الحق في التمثيل القانوني",
      },
      {
        type: "paragraph",
        text: "لكل شخص متهم بجريمة أو متورط في نزاع مدني الحق في أن يمثله محامٍ مؤهل. هذا الحق منصوص عليه في الدستور اللبناني وهو ركيزة أساسية في منظومة العدالة. في مكتب إشراقية للمحاماة، نحرص على أن يحظى كل موكل بتمثيل احترافي ومخصص بغض النظر عن تعقيد قضيته.",
      },
      {
        type: "quote",
        text: "العدالة ليست امتيازًا — بل هي حق لكل شخص يطرق بابنا.",
        cite: "رامي إشراقية – المؤسس",
      },
      {
        type: "heading",
        text: "الإجراءات المدنية والجزائية",
      },
      {
        type: "paragraph",
        text: "في القضايا المدنية — كالنزاعات العقارية وقانون الأسرة والعقود — تتبع المحاكم اللبنانية إجراءات منظمة تتيح لكلا الطرفين تقديم قضيتهما. أما في الإجراءات الجزائية، فالمتهم بريء حتى تثبت إدانته، وله الحق في معرفة التهم الموجهة إليه، والتزام الصمت، والطعن في الأدلة.",
      },
      {
        type: "paragraph",
        text: "يمتلك مكتبنا خبرة تزيد على 60 عامًا في التعامل مع المحاكم المدنية والجزائية في لبنان. نتابع القضايا منذ الاستشارة الأولى وحتى مراحل الاستئناف، لضمان الدفاع عن مصالحك في كل مرحلة.",
      },
      {
        type: "heading",
        text: "كيف يمكننا مساعدتك",
      },
      {
        type: "paragraph",
        text: "سواء كنت تواجه اتهامات جزائية، أو تشارك في نزاع تجاري، أو تسعى لحماية حقوقك العقارية والأسرية، فإن مكتب إشراقية للمحاماة هنا لخدمتك. تواصل معنا اليوم لاستشارة سرية مع أحد محامينا المتخصصين.",
      },
    ],
  },
  {
    id: 2,
    slug: "family-law-and-personal-status-in-lebanon",
    image: blog2Img,
    dateEn: "April 5, 2024",
    dateAr: "٥ أبريل ٢٠٢٤",
    authorEn: "Ramy Ichrakieh",
    authorAr: "رامي إشراقية",
    categoryEn: "Family Law",
    categoryAr: "قانون الأسرة",
    titleEn: "Family Law and Personal Status in Lebanon",
    titleAr: "قانون الأسرة والأحوال الشخصية في لبنان",
    excerptEn:
      "Family law in Lebanon is governed by religious courts. Discover how personal status laws affect marriage, divorce, custody, and inheritance.",
    excerptAr:
      "يخضع قانون الأسرة في لبنان للمحاكم الدينية. اكتشف كيف تؤثر قوانين الأحوال الشخصية على الزواج والطلاق والحضانة والإرث.",
    contentEn: [
      {
        type: "paragraph",
        text: "Lebanon's approach to family law is unique in the Arab world — personal status matters such as marriage, divorce, custody, and inheritance are governed by the religious community to which a person belongs. There are 18 recognized religious sects in Lebanon, each with its own courts and legal traditions.",
      },
      {
        type: "heading",
        text: "Marriage and Divorce",
      },
      {
        type: "paragraph",
        text: "Civil marriage is not legally recognized in Lebanon; all marriages must be contracted through a religious authority. For Muslims, the Sharia courts handle family matters under Islamic law, while Christians are subject to the rules of their respective ecclesiastical courts. Divorce proceedings vary significantly between sects, and having a knowledgeable attorney is essential to navigate the process efficiently.",
      },
      {
        type: "quote",
        text: "In family matters, the law touches the heart of every home. We handle these cases with both legal expertise and human sensitivity.",
        cite: "Ramy Ichrakieh",
      },
      {
        type: "heading",
        text: "Child Custody",
      },
      {
        type: "paragraph",
        text: "Custody disputes are among the most emotionally challenging cases in family law. Lebanese courts generally prioritize the best interests of the child while applying the rules of the relevant religious community. Our attorneys are experienced in representing parents across multiple religious jurisdictions and will work tirelessly to protect both your rights and the welfare of your children.",
      },
      {
        type: "heading",
        text: "Inheritance and Succession",
      },
      {
        type: "paragraph",
        text: "Inheritance in Lebanon is also governed by religious law. For Muslims, the Quran sets clear rules for the distribution of estates, while Christian inheritance is generally handled under civil inheritance law. Our firm provides comprehensive estate planning and succession advice to ensure your assets are distributed according to your wishes and the applicable law.",
      },
    ],
    contentAr: [
      {
        type: "paragraph",
        text: "يتميز لبنان بنهج فريد في قانون الأسرة — إذ تخضع قضايا الأحوال الشخصية كالزواج والطلاق والحضانة والإرث للمجتمع الديني الذي ينتمي إليه الشخص. يُعترف بـ 18 طائفة دينية في لبنان، لكل منها محاكمها وتقاليدها القانونية الخاصة.",
      },
      {
        type: "heading",
        text: "الزواج والطلاق",
      },
      {
        type: "paragraph",
        text: "لا يُعترف بالزواج المدني قانونيًا في لبنان؛ ويجب إبرام جميع عقود الزواج عبر جهة دينية. بالنسبة للمسلمين، تتولى المحاكم الشرعية شؤون الأسرة وفق الشريعة الإسلامية، بينما يخضع المسيحيون لأحكام محاكمهم الكنسية. تتباين إجراءات الطلاق تباينًا كبيرًا بين الطوائف، ووجود محامٍ متمرس أمر ضروري للتعامل مع هذه الإجراءات بكفاءة.",
      },
      {
        type: "quote",
        text: "في قضايا الأسرة، يلامس القانون قلب كل بيت. نتعامل مع هذه القضايا بالكفاءة القانونية والحساسية الإنسانية معًا.",
        cite: "رامي إشراقية",
      },
      {
        type: "heading",
        text: "حضانة الأطفال",
      },
      {
        type: "paragraph",
        text: "تعدّ نزاعات الحضانة من أصعب قضايا قانون الأسرة من الناحية العاطفية. تولي المحاكم اللبنانية عمومًا الأولوية لمصلحة الطفل الفضلى مع تطبيق أحكام المجتمع الديني المعني. محامونا متمرسون في تمثيل الآباء والأمهات أمام مختلف الجهات القضائية الدينية، وسيعملون بلا كلل لحماية حقوقك وسلامة أطفالك.",
      },
      {
        type: "heading",
        text: "الإرث والتركات",
      },
      {
        type: "paragraph",
        text: "يخضع الإرث في لبنان أيضًا للقانون الديني. بالنسبة للمسلمين، يحدد القرآن الكريم قواعد واضحة لتوزيع التركات، بينما يخضع إرث المسيحيين عمومًا لقانون الإرث المدني. يقدم مكتبنا استشارات شاملة في التخطيط للتركات والخلافة لضمان توزيع أصولك وفق رغباتك والقانون المعمول به.",
      },
    ],
  },
  {
    id: 3,
    slug: "doing-business-in-lebanon-legal-guide",
    image: blog3Img,
    dateEn: "May 1, 2024",
    dateAr: "١ مايو ٢٠٢٤",
    authorEn: "Ramy Ichrakieh",
    authorAr: "رامي إشراقية",
    categoryEn: "Commercial Law",
    categoryAr: "القانون التجاري",
    titleEn: "Doing Business in Lebanon: A Legal Guide",
    titleAr: "ممارسة الأعمال في لبنان: دليل قانوني",
    excerptEn:
      "Starting or expanding a business in Lebanon requires careful legal planning. Explore the key legal requirements for company formation, contracts, and dispute resolution.",
    excerptAr:
      "يتطلب بدء أو توسيع نشاط تجاري في لبنان تخطيطًا قانونيًا دقيقًا. استكشف المتطلبات القانونية الأساسية لتأسيس الشركات والعقود وتسوية النزاعات.",
    contentEn: [
      {
        type: "paragraph",
        text: "Despite the economic challenges Lebanon has faced in recent years, it remains an important hub for commerce, services, and investment in the region. Understanding the legal framework for doing business is critical for any entrepreneur or investor looking to operate in Lebanon.",
      },
      {
        type: "heading",
        text: "Company Formation",
      },
      {
        type: "paragraph",
        text: "Lebanon offers several types of business structures, including sole proprietorships, partnerships, limited liability companies (SARL), and joint stock companies (SAL). Each structure has different requirements for capital, governance, and liability. Our firm guides clients through the entire registration process — from drafting articles of association to obtaining the necessary licenses and permits.",
      },
      {
        type: "quote",
        text: "A strong legal foundation is the bedrock of every successful business. We help you build it right from the start.",
        cite: "Ramy Ichrakieh",
      },
      {
        type: "heading",
        text: "Contracts and Agreements",
      },
      {
        type: "paragraph",
        text: "Well-drafted contracts are essential for protecting your business interests. Whether you are entering into supplier agreements, employment contracts, lease agreements, or partnership deals, having a qualified attorney review and draft your contracts can prevent costly disputes down the line. Our commercial law team has extensive experience drafting and negotiating contracts across all sectors.",
      },
      {
        type: "heading",
        text: "Dispute Resolution",
      },
      {
        type: "paragraph",
        text: "Commercial disputes are an inevitable reality of doing business. Lebanon's commercial courts are equipped to handle complex business disputes, and arbitration is increasingly used as an efficient alternative to litigation. Our firm represents clients in both court proceedings and arbitration, working to resolve disputes swiftly and favorably.",
      },
      {
        type: "paragraph",
        text: "From company formation to contract drafting and dispute resolution, Ishraqieh Law Firm is your trusted legal partner for business in Lebanon. Contact us today to learn how we can support your business goals.",
      },
    ],
    contentAr: [
      {
        type: "paragraph",
        text: "على الرغم من التحديات الاقتصادية التي واجهها لبنان في السنوات الأخيرة، فإنه لا يزال مركزًا مهمًا للتجارة والخدمات والاستثمار في المنطقة. إن فهم الإطار القانوني لممارسة الأعمال أمر بالغ الأهمية لأي رائد أعمال أو مستثمر يسعى للعمل في لبنان.",
      },
      {
        type: "heading",
        text: "تأسيس الشركات",
      },
      {
        type: "paragraph",
        text: "يوفر لبنان عدة أشكال من الهياكل التجارية، بما فيها المؤسسات الفردية، والشراكات، وشركات المسؤولية المحدودة (ش.م.م)، وشركات المساهمة المغفلة (ش.م.ل). لكل هيكل متطلبات مختلفة تتعلق برأس المال والحوكمة والمسؤولية. يرشد مكتبنا العملاء خلال عملية التسجيل بأكملها — من صياغة عقد التأسيس إلى الحصول على التراخيص والتصاريح اللازمة.",
      },
      {
        type: "quote",
        text: "الأساس القانوني المتين هو ركيزة كل عمل تجاري ناجح. نساعدك على بنائه بشكل صحيح منذ البداية.",
        cite: "رامي إشراقية",
      },
      {
        type: "heading",
        text: "العقود والاتفاقيات",
      },
      {
        type: "paragraph",
        text: "العقود المصاغة بدقة ضرورية لحماية مصالحك التجارية. سواء كنت تبرم اتفاقيات مع موردين، أو عقود عمل، أو عقود إيجار، أو صفقات شراكة، فإن الاستعانة بمحامٍ مؤهل لمراجعة عقودك وصياغتها يمكن أن يحول دون وقوع نزاعات مكلفة في المستقبل. يتمتع فريقنا في القانون التجاري بخبرة واسعة في صياغة العقود والتفاوض عليها في مختلف القطاعات.",
      },
      {
        type: "heading",
        text: "تسوية النزاعات",
      },
      {
        type: "paragraph",
        text: "النزاعات التجارية واقع لا مفر منه في عالم الأعمال. محاكم التجارة اللبنانية مجهزة للتعامل مع النزاعات التجارية المعقدة، ويُلجأ بشكل متزايد إلى التحكيم كبديل فعّال عن التقاضي. يمثل مكتبنا العملاء في كل من الإجراءات القضائية والتحكيم، ساعيًا إلى حل النزاعات بسرعة وبصورة مواتية.",
      },
      {
        type: "paragraph",
        text: "من تأسيس الشركات إلى صياغة العقود وتسوية النزاعات، يُعدّ مكتب إشراقية للمحاماة شريكك القانوني الموثوق للأعمال في لبنان. تواصل معنا اليوم لتعرف كيف يمكننا دعم أهدافك التجارية.",
      },
    ],
  },
];

export default blogs;
