const links = [
    {
        id: 1,
        name: "النموذج الإشرافي في ضوء تمكين المدرسة العامة",
        link: "https://drive.google.com/file/d/1yBZ1n5hGpiEJsBY-dOdz3qSr43BkQGHc/view",
        icon: '<i class="bi bi-mortarboard"></i>' // إشراف / تعليم
    },
    {
        id: 2,
        name: "وثيقة التشكيلات الإشرافية المدرسية",
        link: "https://drive.google.com/file/d/1Re4bRxnIiGzxQxKTkEVSqyPRD3bJAaLv/view",
        icon: '<i class="bi bi-diagram-3"></i>' // تشكيل / هيكل إداري
    },
    {
        id: 3,
        name: "الدليل التنظيمي لمدارس التعليم العام",
        link: "https://drive.google.com/file/d/1SHal2Aj58oJIgswXw6vHRpyJQz3WK_ah/view",
        icon: '<i class="bi bi-journal-text"></i>'
    },
    {
        id: 4,
        name: "الدليل الإجرائي لمدارس التعليم العام",
        link: "https://drive.google.com/file/d/1v0IWFXqyPeBNoq1WUaYu9_nissamYuLC/view",
        icon: '<i class="bi bi-clipboard-check"></i>'
    },
    {
        id: 5,
        name: "خريطة نواتج التعلم النهائية",
        link: "https://drive.google.com/file/d/1tNhrHYXj3ImgNL6P_wBgkx58wid9X1IK/view",
        icon: '<i class="bi bi-map"></i>'
    },
    {
        id: 6,
        name: "دليل المستخدم لتطبيق حضوري للموظفين",
        link: "https://drive.google.com/file/d/1QWU7srRwl1I0PSQn-rwLobRJuAnq1_Ob/view",
        icon: '<i class="bi bi-person-badge"></i>'
    },
    {
        id: 7,
        name: "دليل تخطيط شاغلي الوظائف التعليمية",
        link: "https://drive.google.com/file/d/1j87idLpHmqYigFGexATQVaFT_5Bgq3d3/view",
        icon: '<i class="bi bi-person-lines-fill"></i>'
    },
    {
        id: 8,
        name: "الدليل المبسط لتقييم أداء شاغلي الوظائف التعليمية",
        link: "https://drive.google.com/file/d/1z6rvxETmNxzJVcNS9EMnJMgc8Z9V7Y1i/view",
        icon: '<i class="bi bi-graph-up"></i>'
    },
    {
        id: 9,
        name: "دليل إرشادي بأهمية الحفاظ على الوثائق والإتصالات الإدارية",
        link: "https://drive.google.com/file/d/1T4DbU8mJDQyC1c9yvvjeKoC8MKZBr420/view",
        icon: '<i class="bi bi-archive"></i>'
    },
    {
        id: 10,
        name: "قواعد السلوك والمواظبة لطلاب وطالبات التعليم العام",
        link: "https://drive.google.com/file/d/1VsxRecWzB6Zc--VyhvkNRwX_EtR_ksXr/view",
        icon: '<i class="bi bi-exclamation-circle"></i>'
    },
    {
        id: 11,
        name: "دليل الزي المدرسي والرياضي لطلبة التعليم العام",
        link: "https://drive.google.com/file/d/1Yo1pyBlvBnXkVqfcfpbKhYsyG62XjNKt/view",
        icon: '<i class="bi bi-person-walking"></i>'
    },
    {
        id: 12,
        name: "إضاءات الأنشطة الطلابية للعام الدراسي",
        link: "https://drive.google.com/file/d/1sfjuD1oWpum1_5UsRrjNSLg63tH6q7eT/view",
        icon: '<i class="bi bi-lightbulb"></i>'
    },
    {
        id: 13,
        name: "الدليل الإسترشادي لأبرز الخدمات التقنية للتوجية الطلابي في نظام نور",
        link: "https://drive.google.com/file/d/1hyUmq-ST6ZXW9Gimlc8XhIs26kn5vKLu/view",
        icon: '<i class="bi bi-pc-display"></i>'
    },
    {
        id: 14,
        name: "خطة برامج وخدمات التوجيه الطلابي الفصل الدراسي الأول",
        link: "https://drive.google.com/file/d/1BNrzJ4mNuw4gumB0wN1o5Ih9vMNRcWrM/view",
        icon: '<i class="bi bi-calendar2-week"></i>'
    },
    {
        id: 15,
        name: "تحسين التدريس (مبادئ ومفاهيم ومهارات أساسية)",
        link: "https://drive.google.com/file/d/1coAZYnwoZo8EMtv1Wc7q1Tce9G22fNQz/view",
        icon: '<i class="bi bi-book-half"></i>'
    },
    {
        id: 16,
        name: "إطار تحسين التدريس (نموذج تطبيقي)",
        link: "https://drive.google.com/file/d/1b4wQjW0zg3NVEZGL56O6smGI6PMcwpbW/view",
        icon: '<i class="bi bi-easel2"></i>'
    },
    {
        id: 17,
        name: "إجراءات تطبيق إطار تحسين التدريس",
        link: "https://drive.google.com/file/d/1YukZifCVz-H_siZENpiYhKe3HmvGraFF/view",
        icon: '<i class="bi bi-gear"></i>'
    },
    {
        id: 18,
        name: "أدوات دعم تطبيق إطار تحسين التدريس",
        link: "https://drive.google.com/file/d/1gDPj7V1NMdmoSHRrlal3P3ZrZuPY_aNc/view",
        icon: '<i class="bi bi-tools"></i>'
    },
    {
        id: 19,
        name: "لائحة تقويم الطالب",
        link: "https://drive.google.com/file/d/1dbNIladxQKaSK2vqMtA-WjjtyxHe2y-T/view",
        icon: '<i class="bi bi-list-check"></i>'
    },
    {
        id: 20,
        name: "الإجراءات التنفيذية للائحة تقويم الطالب",
        link: "https://drive.google.com/file/d/1vItUq5sd_aKiImb7QWdllOEGE76h_j-O/view",
        icon: '<i class="bi bi-file-earmark-ruled"></i>'
    },
    {
        id: 21,
        name: "دليل توزيع درجات الموارد الدراسية",
        link: "https://drive.google.com/file/d/1yRzRnrgrLUk4AkKmejopj-tpDGNeoBix/view",
        icon: '<i class="bi bi-bar-chart-steps"></i>'
    },
    {
        id: 22,
        name: "دليل الإختبارات",
        link: "https://drive.google.com/file/d/11z1mN5g0-2T1XRD-lr7QvJfzmvqthiQP/view",
        icon: '<i class="bi bi-file-earmark-text"></i>'
    },
    {
        id: 23,
        name: "دليل الخطط الدراسية الإصدار الخامس",
        link: "https://drive.google.com/file/d/15xgygf2cj5q81mP1x4WczPeSy2Ceb4hY/view",
        icon: '<i class="bi bi-layout-text-sidebar-reverse"></i>'
    },
    {
        id: 24,
        name: "نموذج الحصص الأسبوعية في الفصلين الدراسيين",
        link: "https://drive.google.com/file/d/1itJh0I-hqyCayZ7e8QNcoCtipu-qaplW/view",
        icon: '<i class="bi bi-calendar3"></i>'
    },
    {
        id: 25,
        name: "نموذج استرشادي للحصص الدراسية خلال 36 اسبوع",
        link: "https://drive.google.com/file/d/1QTD2OgMPWYU0zBjTT9Qt3OPx9GaywXC4/view",
        icon: '<i class="bi bi-calendar-week"></i>'
    }
];
