function showProducts(categoryName) {
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  var modalImg = document.getElementById("img01");
  // there are two schools of declaring variables
  // one says, that you should declare all variables at the top of your file/function
  // the other says, that you should declare a variable right before you are going to use it
  let element = document.getElementById("productsList");

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  // This are two ways, of getting the same result:
  // const category = products[categoryName];
  // category.forEach((product) => {

  // And the second way, one line less to write:
  products[categoryName].forEach((product) => {
    // każdy element tablicy products jest przypisany do parametru products
    productItem = document.createElement("div");
    productItem.classList.add("productItem");

    productImages = document.createElement("div");
    productImages.classList.add("productImage");
    thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = product.images.mainImage;
    thumbnail.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
    productImages.appendChild(thumbnail);
    productItem.appendChild(productImages);

    productSmallImages = document.createElement("div");
    productSmallImages.classList.add("small"); // key to nazwa konkretnego elementu
    for (let key in product.images) {
      if (key == "mainImage") {
        // co to dokładnie
        continue;
      }
      small = document.createElement("img");
      small.classList.add("smaller");
      small.src = product.images[key];
      small.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
      };
      productSmallImages.appendChild(small);
    }
    productItem.appendChild(productSmallImages);
    producttext = document.createElement("div");
    producttext.classList.add("title");

    productTitle = document.createElement("p");
    productTitle.textContent = product.title;
    producttext.appendChild(productTitle);

    productPrice = document.createElement("p");
    productPrice.textContent =
      "Cena: " + product.price + " " + product.currency;
    producttext.appendChild(productPrice);
    productItem.appendChild(producttext);

    document.querySelector("#productsList").appendChild(productItem);
  });
}

const products = {
  //obiekt
  zabki: [
    //tablica
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_au_wz_88_95_01.jpg",
        path2: "img/zabka_au_wz_88_95_02.jpg",
        path3: "img/zabka_au_wz_88_95_03.jpg",
        path4: "img/zabka_au_wz_88_95_04.jpg",
      },
      price: 65,
      title: "Żabka austriacka 88/95",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/angielska.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka angielska do bagnetu Martini - Henry",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/lee_enfield.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka angielska do bagnetu Lee Enfield",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/arg.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka do bagnetu argentyńskiego",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/arisaka_[1].jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka Arisaka [1] do bagnetu wz. 30/39",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/arisaka_[2].jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka Arisaka [2] do bagnetu wz. 30/39",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/arisaka_[3].jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka Arisaka [3] do bagnetu wz. 30/39",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/au_70_73.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka austriacka wz. 1873",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_au_szabla_piechoty_01.jpg",
        path2: "img/zabka_au_szabla_piechoty_02.jpg",
        path3: "img/zabka_au_szabla_piechoty_03.jpg",
      },
      price: 70,
      title: "Żabka austriacka do szabli piechoty",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_au_michalek_01.jpg",
        path2: "img/zabka_au_michalek_02.jpg",
        path3: "img/zabka_au_michalek_03.jpg",
      },
      price: 70,
      title: "Żabka austriacka do tasaka wz. 1853",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria_3.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka austriacka zastępcza",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/chassepot.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 70,
      title: "Żabka chassepot wz. 1866",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/czechy.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka czeska do bagnetu wz. 24",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/fr_74_nit.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 74 wersja nitowana [1] ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_fr74_1.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 74 [1]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/fr_86_93.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 86/93",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_fr_92_01.jpg",
        path2: "img/zabka_fr_92_02.jpg",
        path3: "img/zabka_fr_92_03.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 92",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/fr_1822.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 140,
      title: "Żabka do szabli francuskiej wz. 1822 troczona do siodła",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_hi_wz_1893_01.jpg",
        path2: "img/zabka_hi_wz_1893_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka hiszpańska wz. 1893",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/jug.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 60,
      title: "Żabka jugosłowiańska do bagneteu wz. 1924",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_84_98_1.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 84/98",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_84_98_3.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 84/98 [2]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_84_98_30.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 84/98 [3]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_1871.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 1871",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_98_05_b.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 98",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_98_05_c.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 98 [2]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_ks.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu KS 98",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niem_s_98_01.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu S 98",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_meksyk_wz_1931_01.jpg",
        path2: "img/zabka_meksyk_wz_1931_02.jpg",
        path3: "img/zabka_meksyk_wz_1931_03.jpg",
        path4: "img/zabka_meksyk_wz_1931_04.jpg",
      },
      price: 65,
      title: "Żabka meksykańska wz. 1931",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/pl_19.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 19 do bagnetu wz. 22/27",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_pl_wz_22_01.jpg",
        path2: "img/zabka_pl_wz_22_02.jpg",
        path3: "img/zabka_pl_wz_22_03.jpg",
        path4: "img/zabka_pl_wz_22_04.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 22 do bagnetu francuskiego wz. 86/93",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/pl_22_22_27.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 22 do bagnetu wz. 22/27",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_pl_wz_24_01.jpg",
        path2: "img/zabka_pl_wz_24_02.jpg",
        path3: "img/zabka_pl_wz_24_03.jpg",
        path4: "img/zabka_pl_wz_24_04.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 24 'uniwersalna'",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/pl_28.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 28 do bagnetu niemieckiego wz. 98/05",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/pl_29.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 29",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_zol_1.jpg",
        path2: "img/zabka_zol_2.jpg",
        path3: "img/zabka_zol_3.jpg",
        path4: "img/zabka_zol_4.jpg",
      },
      price: 110,
      title: "Żabka wz. 31 do szabli żołnierskiej",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_wz_27_szabla_01.jpg",
        path2: "img/zabka_wz_27_szabla_02.jpg",
        path3: "img/zabka_wz_27_szabla_03.jpg",
        path4: "img/zabka_wz_27_szabla_04.jpg",
      },
      price: 250,
      title: "Żabka wz. 27 do szabli oficerskiej wz. 21/22",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_wz_38_szabla_01.jpg",
        path2: "img/zabka_wz_38_szabla_02.jpg",
        path3: "img/zabka_wz_38_szabla_03.jpg",
        path4: "img/zabka_wz_38_szabla_04.jpg",
        path5: "img/zabka_wz_38_szabla_05.jpg",
      },
      price: 200,
      title: "Żabka wz. 38 do szabli oficerskiej wz. 21/22",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_pl_szabla_oficerska_wz_21_22_01.jpg",
        path2: "img/zabka_pl_szabla_oficerska_wz_21_22_02.jpg",
        path3: "img/zabka_pl_szabla_oficerska_wz_21_22_03.jpg",
        path4: "img/zabka_pl_szabla_oficerska_wz_21_22_04.jpg",
        path5: "img/zabka_pl_szabla_oficerska_wz_21_22_05.jpg",
        path6: "img/zabka_pl_szabla_oficerska_wz_21_22_06.jpg",
      },
      price: 110,
      title: "Żabka do szabli oficerskiej wz. 21/22",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_01.jpg",
        path2: "img/zabka_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 150,
      title: "Żabka do szabli austriackiej troczona do siodła",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_szwajcaria.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka szwajcarska",
    },
  ],
  poland: [
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/ostrogi_pl.jpg",
        // path2: "img/polska/pl_ostrogi_oficerskie_1",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 220,
      title: "Ostrogi żołnierskie wz. 31 (komplet)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_ostrogi_oficerskie_1.jpg",
        path2: "img/polska/pl_ostrogi_oficerskie_2.jpg",
        path3: "img/polska/pl_ostrogi_oficerskie_3.jpg",
      },
      price: 220,
      title: "Ostrogi oficerskie (komplet)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zestaw_pl.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 1000,
      title: "Zestaw żołnierza polskiego",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_perkun_1924_1.jpg",
        path2: "img/polska/pl_perkun_1924_2.jpg",
        path3: "img/polska/pl_perkun_1924_3.jpg",
      },
      price: 160,
      title: "Futerał na pistolet sygnałowy Perkun wz. 1924",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_vis_01.jpg",
        path2: "img/polska/pl_vis_02.jpg",
        path3: "img/polska/pl_vis_03.jpg",
        path4: "img/polska/pl_vis_04.jpg",
        path5: "img/polska/pl_vis_05.jpg",
        path6: "img/polska/pl_vis_06.jpg",
        path7: "img/polska/pl_vis_07.jpg",
        path8: "img/polska/pl_vis_08.jpg",
        path9: "img/polska/pl_vis_10.jpg",
        path10: "img/polska/pl_vis_16.jpg",
      },
      price: 220,
      title:
        "Futerał na pistolet VIS wz. 35 (pas nośny płatny dodatkowo 60 zł)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_vis_11.jpg",
        path2: "img/polska/pl_vis_12.jpg",
        path3: "img/polska/pl_vis_13.jpg",
        path4: "img/polska/pl_vis_14.jpg",
        path5: "img/polska/pl_vis_15.jpg",
      },
      price: 280,
      title: "Futerał na pistolet VIS wz. 35 wersja z wyciorem ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/smycz_vis_35_03.jpg",
        path2: "img/polska/smycz_vis_35_01.jpg",
        path3: "img/polska/smycz_vis_35_02.jpg",
        path4: "img/polska/smycz_vis_35_04.jpg",
      },
      price: 250,
      title: "Smycz do pistoletu VIS wz. 35",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/nagant_[1].jpg",
        path2: "img/polska/nagant_[2].jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 140,
      title: "Futerał na rewolwer Nagant",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/lornetka_1.jpg",
        path2: "img/polska/lornetka_2.jpg",
        path3: "img/polska/lornetka_3.jpg",
        path4: "img/polska/lornetka_4.jpg",
        path5: "img/polska/lornetka_5.jpg",
        path6: "img/polska/lornetka_6.jpg",
      },
      price: 450,
      title: "Futerał na lornetkę P. Z. O",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pasek_pzo.jpg",
        path2: "img/polska/lornetka_2.jpg",
        path3: "img/polska/lornetka_3.jpg",
        path4: "img/polska/lornetka_4.jpg",
        path5: "img/polska/lornetka_5.jpg",
      },
      price: 50,
      title: "Pasek do lornetki P.Z.O",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/kbk_mauser_98_01.jpg",
        path2: "img/polska/kbk_mauser_98_02.jpg",
        path3: "img/polska/kbk_mauser_98_03.jpg",
        // path4: "img/polska/vis_2_04.jpg",
      },
      price: 100,
      title: "Pas nośny kb. Mauser wz. 98",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/deszczochron.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 80,
      title: "Deszczochron lornetki P.Z.O",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pasek_lornetki_1.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 80,
      title: "Pasek nośny lornetki P.Z.O",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pasek_kolberg_01.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 90,
      title: "Pasek do futerału lornetki Kolberg",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/torebka_lucznik_01.jpg",
        path2: "img/polska/torebka_lucznik_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 135,
      title: "Torebka narzędziowa do roweru łucznik",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_cebra_1.jpg",
        path2: "img/polska/pl_cebra_2.jpg",
        path3: "img/polska/pl_cebra_3.jpg",
      },
      price: 110,
      title: "Futerał na pistolet kal. 7,65 Cebra wz. 1916",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/optyczny_01.jpg",
        path2: "img/polska/optyczny_02.jpg",
        path3: "img/polska/optyczny_03.jpg",
        path4: "img/polska/optyczny_04.jpg",
      },
      price: 280,
      title: "Futerał na celownik optyczny ckm Maxim 08",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/fn_1910_01.jpg",
        path2: "img/polska/fn_1910_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 100,
      title: "Kabura na pistolet kal. 7,65 FN wz. 1910",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/lebel_1892_01.jpg",
        path2: "img/polska/lebel_1892_02.jpg",
        path3: "img/polska/lebel_1892_03.jpg",
        path4: "img/polska/lebel_1892_04.jpg",
      },
      price: 250,
      title: "Kabura do rewolweru Lebel wz. 1892",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/torba_off_b_01.jpg",
        path2: "img/polska/torba_off_b_02.jpg",
        path3: "img/polska/torba_off_b_03.jpg",
        path4: "img/polska/torba_off_b_04.jpg",
      },
      price: 450,
      title: "Torba oficerska typ B",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/torba_off_a_01.jpg",
        path2: "img/polska/torba_off_a_02.jpg",
        path3: "img/polska/torba_off_a_03.jpg",
        path3: "img/polska/torba_off_a_04.jpg",
      },
      price: 480,
      title: "Torba oficerska typ A",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/torba01.jpg",
        path2: "img/polska/torba02.jpg",
        path3: "img/polska/torba03.jpg",
        path4: "img/polska/torba04.jpg",
        path5: "img/polska/torba05.jpg",
      },
      price: 450,
      title: "Torba oficerska typ B",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/polska_oficerska_skarbowa_01.jpg",
        path2: "img/polska/polska_oficerska_skarbowa_02.jpg",
        path3: "img/polska/polska_oficerska_skarbowa_03.jpg",
      },
      price: 430,
      title: "Torba oficerska typ B tzw. 'skarbowa'",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/torba_zandarmerii_01.jpg",
        path2: "img/polska/torba_zandarmerii_02.jpg",
        path3: "img/polska/torba_zandarmerii_03.jpg",
        path4: "img/polska/torba_zandarmerii_04.jpg",
        path5: "img/polska/torba_zandarmerii_05.jpg",
      },
      price: 320,
      title: "Torba służbowa żandarmerii",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/wkladka_torba_b.jpg",
        path2: "img/polska/torba02.jpg",
        path3: "img/polska/torba03.jpg",

        path4: "img/polska/torba04.jpg",
        path5: "img/polska/torba05.jpg",
      },
      price: 85,
      title: "Wkładka na przybory do torby oficerskiej typu B",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/lopata_sap.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 160,
      title: "Futerał na łopatę saperską",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/ramka_pl_[1].jpg",
        path2: "img/polska/ramka_pl_[2].jpg",
        path3: "img/polska/ramka_pl_[3].jpg",
        path4: "img/polska/ramka_pl_[4].jpg",
        path5: "img/polska/ramka_pl_[5].jpg",
      },
      price: 120,
      title: "Futerał na polską łopatkę piechoty",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/toporek_pl_1.jpg",
        path2: "img/polska/toporek_pl_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał na toporek drużynowych i obsług K.M. W.P. 1939",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/lad_pl_01.jpg",
        path2: "img/polska/lad_pl_02.jpg",
        path3: "img/polska/lad_pl_03.jpg",
        path4: "img/polska/lad_pl_04.jpg",
        path5: "img/polska/lad_pl_05.jpg",
      },
      price: 600,
      title: "Ładownice wz. 22 polska K.B Mauser (komplet)",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/lad_mann_01.jpg",
        path2: "img/polska/lad_mann_02.jpg",
        path3: "img/polska/lad_mann_03.jpg",
      },
      price: 380,
      title: "Ładownice Mannlicher (komplet)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/ladownica_pl_au_01.jpg",
        path2: "img/polska/ladownica_pl_au_02.jpg",
        path3: "img/polska/ladownica_pl_au_03.jpg",
      },
      price: 90,
      title: "Ładownica do Mannlichera",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pas_polska_01.jpg",
        path2: "img/polska/pas_polska_03.jpg",
        path3: "img/polska/pas_polska_04.jpg",
        // path4: "img/polska/pas_polska_02.jpg",
      },
      price: 85,
      title: "Pas główny szeregowca wz. 31 (110 cm, dodatkowe 10 cm + 5 zl)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pas_polska_05.jpg",
        path2: "img/polska/pas_polska_02.jpg",
        path3: "img/polska/pas_polska_04.jpg",
        // path4: "img/polska/pas_polski_31.jpg",
      },
      price: 85,
      title: "Pas główny szeregowca wz. 24 (110 cm, dodatkowe 10 cm + 5 zl)",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pas_mauser_2.jpg",
        path2: "img/polska/pas_mauser_1.jpg",
        path3: "img/polska/pas_mauser_3.jpg",
      },
      price: 70,
      title:
        "Pas nośny K.B.K wz 98, K.B.K wz 29, R.K.M wz 28, Granatnik wz 36, Futerał na lufy C.K.M wz 30",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pasek_spodnie_01.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 40,
      title: "Pasek do spodni WP 1918-1939 (100 cm; dodatkowe 10 cm + 5 zł)",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pas_lebel_03.jpg",
        path2: "img/polska/pas_lebel_01.jpg",
        path3: "img/polska/pas_lebel_02.jpg",
      },
      price: 90,
      title: "Pas nośny kb Lebel wz. 86/93 i kb Berthier wz. 07/15",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pasek_nosny.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 60,
      title: "Pasek nośny do kabury na pistole VIS",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_adrian.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 40,
      title: "Podpinka do hełmu Adrian wz. 15",
    },
    // {
    //   currency: "PLN",
    //   images: {
    //     mainImage: "img/polska/pasek_nosny.jpg",
    //     path2: "img/zabka_au_wz_88_95_01.jpg",
    //     path3: "img/zabka_au_wz_88_95_01.jpg",
    //   },
    //   price: 50,
    //   title: "Pasek nośny do kabury na pistole VIS",
    // },

    // {
    //   currency: "PLN",
    //   images: {
    //     mainImage: "img/polska/pl_adrian.jpg",
    //     path2: "img/zabka_au_wz_88_95_01.jpg",
    //     path3: "img/zabka_au_wz_88_95_01.jpg",
    //   },
    //   price: 40,
    //   title: "Podpinka do hełmu Adrian wz. 15",
    // },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/adrian_srodek_01.jpg",
        path2: "img/polska/adrian_srodek_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 80,
      title: "Polska wersja wyposażenia wewnętrznego hełmu Adrian wz. 1915 ",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/podpinka_pl_[1].jpg",
        path2: "img/polska/podpinka_pl_[2].jpg",
        path3: "img/polska/podpinka_pl_[3].jpg",
        path4: "img/polska/podpinka_pl_[4].jpg",
      },
      price: 55,
      title: "Podpinka do hełmu polskiego wz. 31",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pas_off_1.jpg",
        path2: "img/polska/pas_off_2.jpg",
        path3: "img/polska/pas_off_3.jpg",
        path4: "img/polska/pas_off_4.jpg",
        path5: "img/polska/pas_off_5.jpg",
        path6: "img/polska/pas_off_6.jpg",
      },
      price: 270,
      title: "Polski pas oficerski wz. 36 (125 cm, dodatkwowe 10 cm + 10 zł)",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_off_1.jpg",
        // path2: "img/polska/pl_off_2.jpg",
        // path3: "img/polska/pl_off_3.jpg",
        // path4: "img/polska/pl_off_4.jpg",
      },
      price: 270,
      title: "Polski pas oficerski wz. 36 (125 cm, dodatkwowe 10 cm + 10 zł)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/szelki_polska_2.jpg",
        path2: "img/polska/szelki_polska_1.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Polskie szelki kawaleryjskie (cena z hakami)",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/hak_szelki_01.jpg",
        path2: "img/polska/szelki_polska_1.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 20,
      title:
        "Haki do szelek kawaleryjskich, stal ocynkowana, gr. 1,5 mm (cena za sztukę) ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/rekawica.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 100,
      title: "Rękawica wojsk łączności",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/temblak_01.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 55,
      title: "Temblak do szabli polskiej wz. 31 [1]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pasek_koc_01.jpg",
        //   path2: "img/zabka_au_wz_88_95_01.jpg",
        //   path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 25,
      title: "Trok do menażki i koca",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/trok_kbk.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 25,
      title: "Trok do spinania K.B.K z pasem głównym W.P. 1918-1939",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/trok_pods_ckm_01.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 85,
      title: "Trok do spinania podstawy ckm wz. 30",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zabka_zol_1.jpg",
        path2: "img/zabka_zol_2.jpg",
        path3: "img/zabka_zol_3.jpg",
        path4: "img/zabka_zol_4.jpg",
      },
      price: 110,
      title: "Żabka wz. 31 do szabli żołnierskiej",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zabka_wz_27_szabla_01.jpg",
        path2: "img/zabka_wz_27_szabla_02.jpg",
        path3: "img/zabka_wz_27_szabla_03.jpg",
        path4: "img/zabka_wz_27_szabla_04.jpg",
      },
      price: 250,
      title: "Żabka wz. 27 do szabli oficerskiej wz. 21/22",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zabka_wz_38_szabla_01.jpg",
        path2: "img/zabka_wz_38_szabla_02.jpg",
        path3: "img/zabka_wz_38_szabla_03.jpg",
        path4: "img/zabka_wz_38_szabla_04.jpg",
        path5: "img/zabka_wz_38_szabla_05.jpg",
      },
      price: 200,
      title: "Żabka wz. 38 do szabli oficerskiej wz. 21/22",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zabka_pl_szabla_oficerska_wz_21_22_01.jpg",
        path2: "img/zabka_pl_szabla_oficerska_wz_21_22_02.jpg",
        path3: "img/zabka_pl_szabla_oficerska_wz_21_22_03.jpg",
        path4: "img/zabka_pl_szabla_oficerska_wz_21_22_04.jpg",
        path5: "img/zabka_pl_szabla_oficerska_wz_21_22_05.jpg",
        path6: "img/zabka_pl_szabla_oficerska_wz_21_22_06.jpg",
      },
      price: 110,
      title: "Żabka do szabli oficerskiej wz. 21/22",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/zabka_pl_wz_22_01.jpg",
        path2: "img/zabka_pl_wz_22_02.jpg",
        path3: "img/zabka_pl_wz_22_03.jpg",
        path4: "img/zabka_pl_wz_22_04.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 22 do bagnetu francuskiego wz. 86/93",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_kordzik_1.jpg",
        path2: "img/polska/pl_kordzik_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 140,
      title: "Rapcie do kordzika i szabli",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/fr_1822.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 140,
      title: "Żabka do szabli francuskiej wz. 1822 troczona do siodła",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_19.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 19 do bagnetu wz. 22/27 ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_22_22_27.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 22 do bagnetu wz. 22/27 ",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zabka_pl_wz_22_01.jpg",
        path2: "img/zabka_pl_wz_22_02.jpg",
        path3: "img/zabka_pl_wz_22_03.jpg",
        path4: "img/zabka_pl_wz_22_04.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 22 do bagnetu wz. 86/93",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/zabka_pl_wz_24_01.jpg",
        path2: "img/zabka_pl_wz_24_02.jpg",
        path3: "img/zabka_pl_wz_24_03.jpg",
        path4: "img/zabka_pl_wz_24_04.jpg",
      },
      price: 65,
      title: "Żabka polska wz 24 'uniwersalna'",
    },

    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_28.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 28 do bagnetu niemieckiego wz. 98/05",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/pl_29.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka polska wz. 29",
    },
  ],
  germany: [
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/bandoliera_1.jpg",
        path2: "img/niemcy/bandoliera_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 110,
      title: "Bandolier na manierkę sanitarną",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/zasieki_01.jpg",
        path2: "img/niemcy/zasieki_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 240,
      title: "Pokrowiec na nożyce do cięcia zasiek",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/browning_2.jpg",
        path2: "img/niemcy/browning_3.jpg",
        path3: "img/niemcy/browning_1.jpg",
      },
      price: 130,
      title: "Futerał na pistolet FN Browning HP",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/mauser_1910_[1].jpg",
        path2: "img/niemcy/mauser_1910_[2].jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 100,
      title: "Futerał na pistolet Mauser wz. 1910",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p35_czarne_01.jpg",
        path2: "img/niemcy/p35_czarne_02.jpg",
        path3: "img/niemcy/p35_czarne_03.jpg",
        path4: "img/niemcy/p35_braz_01.jpg",
        path5: "img/niemcy/p35_braz_02.jpg",
        path6: "img/niemcy/p35_braz_03.jpg",
      },
      price: 130,
      title: "Futerał na pistolet P-35 (VIS-Radom)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p08_d_1.jpg",
        path2: "img/niemcy/p08_d_2.jpg",
        path3: "img/niemcy/p08_d_4.jpg",
        path4: "img/niemcy/p08_d_5.jpg",
        path5: "img/niemcy/p08_d_6.jpg",
        path6: "img/niemcy/p08_d_7.jpg",
      },
      price: 400,
      title: "Futerał na pistolet Parabellum wz. 1908 Artyleryjskie",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p08_braz_1.jpg",
        path2: "img/niemcy/p08_braz_2.jpg",
        path3: "img/niemcy/p08_braz_3.jpg",
        path4: "img/niemcy/p08_braz_4.jpg",
        path5: "img/niemcy/p08_braz_5.jpg",
        path6: "img/niemcy/p08_braz_6.jpg",
      },
      price: 200,
      title: "Futerał na pistolet Parabellum wz. 1908 brąz wersja wcześniejsza",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p08_ii_1.jpg",
        path2: "img/niemcy/p08_ii_2.jpg",
        path3: "img/niemcy/p08_ii_3.jpg",
        path4: "img/niemcy/p08_ii_4.jpg",
      },
      price: 200,
      title: "Futerał na pistolet Parabellum wz. 1908 brąz wersja późniejsza.",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p08_czarne_1.jpg",
        path2: "img/niemcy/p08_czarne_2.jpg",
        path3: "img/niemcy/p08_czarne_3.jpg",
        path4: "img/niemcy/p08_czarne_4.jpg",
        path5: "img/niemcy/p08_czarne_5.jpg",
      },
      price: 200,
      title: "Futerał na pistolet Parabellum wz. 1908 czarne",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/walther_ppk_2.jpg",
        path2: "img/niemcy/walther_ppk_1.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 100,
      title: "Futerał na pistolet WALTHER P.P.K",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p38_b_1.jpg",
        path2: "img/niemcy/p38_b_2.jpg",
        path3: "img/niemcy/p38_b_3.jpg",
        path4: "img/niemcy/p38_b_4.jpg",
      },
      price: 200,
      title: "Futerał na pistolet WALTHER P-38 brązowy",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p38_twarde_01.jpg",
        path2: "img/niemcy/p38_twarde_02.jpg",
        path3: "img/niemcy/p38_twarde_03.jpg",
        path4: "img/niemcy/p38_twarde_04.jpg",
        path5: "img/niemcy/p38_twarde_05.jpg",
        path6: "img/niemcy/p38_twarde_06.jpg",
        path7: "img/niemcy/p38_twarde_07.jpg",
        path8: "img/niemcy/p38_twarde_08.jpg",
      },
      price: 200,
      title: "Futerał na pistolet WALTHER P-38 czarny",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/p38_miekkie_1.jpg",
        path2: "img/niemcy/p38_miekkie_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 130,
      title: "Futerał na pistolet WALTHER P-38 wersja 'miękka'",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/ge_c96_1.jpg",
        path2: "img/niemcy/ge_c96_2.jpg",
        path3: "img/niemcy/ge_c96_3.jpg",
        path4: "img/niemcy/ge_c96_4.jpg",
        path5: "img/niemcy/ge_c96_5.jpg",
      },
      price: 170,
      title: "Futerał pistoletu MAUSER C-96 (cena za elementy skórzane)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/flary_1.jpg",
        path2: "img/niemcy/flary_2.jpg",
        path3: "img/niemcy/flary_3.jpg",
      },
      price: 500,
      title: "Futerał na flary",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/garlacz_1.jpg",
        path2: "img/niemcy/garlacz_3.jpg",
        path3: "img/niemcy/garlacz_2.jpg",
        path4: "img/niemcy/garlacz_4.jpg",
        path5: "img/niemcy/garlacz_5.jpg",
      },
      price: 200,
      title: "Futerał na garłacz do KB. 98k",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/fernglass_01.jpg",
        path2: "img/niemcy/fernglass_02.jpg",
        path3: "img/niemcy/fernglass_03.jpg",
        path4: "img/niemcy/garlacz_4.jpg",
      },
      price: 300,
      title: "Futerał na lornetkę Fernglass",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_groch_01.jpg",
        path2: "img/niemcy/niem_groch_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał na niemiecką łopatkę piechoty (skóra groszkowana)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/ramka_niem_[1].jpg",
        path2: "img/niemcy/ramka_niem_[2].jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał na niemiecką łopatkę piechoty",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/ramka_n_1.jpg",
        path2: "img/niemcy/ramka_n_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał na pruską łopatkę",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/lopatka_prusy_01.jpg",
        path2: "img/niemcy/lopatka_prusy_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał na pruską łopatkę obsługi K.M",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/rakiet_niem_1.jpg",
        path2: "img/niemcy/rakiet_niem_2.jpg",
        path3: "img/niemcy/rakiet_niem_3.jpg",
        path4: "img/niemcy/rakiet_niem_4.jpg",
      },
      price: 200,
      title: "Futerał na pistolet sygnałowy Walther",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/ladownica_[1].jpg",
        path2: "img/niemcy/ladownica_[2].jpg",
        path3: "img/niemcy/ladownica_[3].jpg",
        path4: "img/niemcy/ladownica_[4].jpg",
        path5: "img/niemcy/ladownica_[5].jpg",
      },
      price: 250,
      title: "Ładownica do KB. G-43",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/ge_ladownice_m_1909_1.jpg",
        path2: "img/niemcy/ge_ladownice_m_1909_2.jpg",
        path3: "img/niemcy/ge_ladownice_m_1909_3.jpg",
        path4: "img/niemcy/ge_ladownice_m_1909_4.jpg",
      },

      price: 600,
      title: "Ładownica M 1909",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/torba_001.jpg",
        path2: "img/img/niemcy/torba_003.jpg",
        path3: "img/niemcy/torba_002.jpg",
      },
      price: 350,
      title: "Meldenkartentashe 1935 (dostępna również w kolorze brązowym)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/przyb_maim_01.jpg",
        path2: "img/niemcy/przyb_maim_04.jpg",
        path3: "img/niemcy/przyb_maim_03.jpg",
        path4: "img/niemcy/przyb_maim_02.jpg",
      },
      price: 270,
      title: "Przybornik ckm Maxim wz. 1908",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/pas_niemcy_01.jpg",
        path2: "img/niemcy/pas_niemcy_02.jpg",
        path3: "img/niemcy/pas_niemcy_03.jpg",
      },
      price: 75,
      title: "Niemiecki pas główny (90cm, dodatkowe 10 cm + 5 zł)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/szlowka_bojowa.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 15,
      title: "Szlufka bojowa",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/optyczny_01.jpg",
        path2: "img/niemcy/optyczny_02.jpg",
        path3: "img/niemcy/optyczny_03.jpg",
        path4: "img/niemcy/optyczny_04.jpg",
      },
      price: 300,
      title: "Futerał na celownik optyczny ckm Maxim 08",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/szelki_niem_ii_1.jpg",
        path2: "img/niemcy/szelki_niem_ii_3.jpg",
        path3: "img/niemcy/szelki_niem_ii_2.jpg",
      },
      price: 185,
      title: "Niemieckie szelki bojowe wz. 39 wersja I",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/szelki_niemieckie_ii_1.jpg",
        path2: "img/niemcy/szelki_niemieckie_ii_2.jpg",
        path3: "img/niemcy/szelki_niemieckie_ii_3.jpg",
      },
      price: 185,
      title: "Niemieckie szelki bojowe wz. 39 wersja II",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/szelki_a_1.jpg",
        path2: "img/niemcy/szelki_a_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 110,
      title: "Niemieckie szelki kawaleryjskie (brązowe)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/szelki_niemieckie_1.jpg",
        path2: "img/niemcy/szelki_niemieckie_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 110,
      title: "Niemieckie szelki kawaleryjskie (czarne)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_podpinka_01.jpg",
        path2: "img/niemcy/niem_podpinka_02.jpg",
        path3: "img/niemcy/niem_podpinka_03.jpg",
      },
      price: 40,
      title: "Podpinka hełmu niemieckiego",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/mg_01.jpg",
        path2: "img/niemcy/mg_07.jpg",
        path3: "img/niemcy/mg_06.jpg",
        path4: "img/niemcy/mg_08.jpg",
        path5: "img/niemcy/mg_05.jpg",
      },
      price: 260,
      title: "Przybornik do K.M. MG-42",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/kartentashe_01.jpg",
        path2: "img/niemcy/kartentashe_02.jpg",
        path3: "img/niemcy/kartentashe_03.jpg",
        path4: "img/niemcy/kartentashe_04.jpg",
      },
      price: 280,
      title: "Torba do Kartentashe M 1912",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/trok_niem_1.jpg",
        path2: "img/niemcy/trok_niem_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Trok do niemieckiej manierki",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niemcy_pasek_02.jpg",
        path2: "img/niemcy/niemcy_pasek_01.jpg",
        path3: "img/niemcy/niemcy_pasek_03.jpg",
      },
      price: 25,
      title: "Trok do menażki (A-rama)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_ks.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu KS 98",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_s_98_01.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu S 98",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_1871.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 1871",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_84_98_1.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 84/98 [1]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_84_98_3.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 84/98 [2]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_84_98_30.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 84/98 [3]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_98_05_b.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 98/05 ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/niemcy/niem_98_05_c.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka niemiecka do bagnetu wz. 98/05 ",
    },
  ],
  russia: [
    {
      currency: "PLN",
      images: {
        mainImage: "img/polska/futeral_toporek_01.jpg",
        path2: "img/polska/futeral_toporek_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 90,
      title: "Futerał na toporek 2",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/car_1.jpg",
        path2: "img/rosja/car_2.jpg",
        path3: "img/rosja/car_3.jpg",
      },
      price: 400,
      title: "Zestaw oficera carskiego",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/ru_lopatka_1.jpg",
        path2: "img/rosja/ru_lopatka_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał na łopatkę",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/lad_mos_01.jpg",
        path2: "img/rosja/lad_mos_02.jpg",
        path3: "img/rosja/lad_mos_03.jpg",
      },
      price: 170,
      title: "Ładownica rosyjska K.B. Mosin wz. 1891",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/pochwa_mosin_wz_91_01.jpg",
        path2: "img/rosja/pochwa_mosin_wz_91_02.jpg",
        path3: "img/rosja/pochwa_mosin_wz_91_03.jpg",
        path4: "img/rosja/pochwa_mosin_wz_91_04.jpg",
        path5: "img/rosja/pochwa_mosin_wz_91_05.jpg",
      },
      price: 85,
      title: "Pochwa na bagnet karabinu Mosin wz. 1891",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/rosja_pas_oficerski_01.jpg",
        path2: "img/rosja/rosja_pas_oficerski_02.jpg",
        path3: "img/rosja/rosja_pas_oficerski_03.jpg",
      },
      price: 125,
      title: "Rosyjski pas oficerski",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/szelki_car_1.jpg",
        path2: "img/rosja/szelki_car_2.jpg",
        path3: "img/rosja/szelki_car_3.jpg",
        path4: "img/rosja/szelki_car_4.jpg",
        path5: "img/rosja/szelki_car_5.jpg",
      },
      price: 250,
      title: "Rosyjskie szelki oficerskie",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/nagant_ru_1.jpg",
        path2: "img/rosja/nagant_ru_2.jpg",
        path3: "img/rosja/nagant_ru_3.jpg",
      },
      price: 130,
      title: "Kabura do Naganta wersja podoficerska",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/nagant_off_01.jpg",
        path2: "img/rosja/nagant_off_02.jpg",
        path3: "img/rosja/nagant_off_03.jpg",
      },
      price: 130,
      title: "Kabura do Naganta wersja oficerska",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/rosja_pas_zol_01.jpg",
        path2: "img/rosja/rosja_pas_zol_02.jpg",
        path3: "img/rosja/rosja_pas_zol_03.jpg",
      },
      price: 85,
      title: "Pas żołnierski wersja I (długość 130 cm; bez klamry) ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/pas_mosin01.jpg",
        path2: "img/rosja/pas_mosin02.jpg",
        path3: "img/rosja/pas_mosin03.jpg",
      },
      price: 85,
      title: "Pas nośny kb. i kbk. Mosin wz. 1891",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/rosja/szaszka_01.jpg",
        path2: "img/rosja/szaszka_02.jpg",
        path3: "img/rosja/szaszka_03.jpg",
        path4: "img/rosja/szelki_car_4.jpg",
        path5: "img/rosja/szelki_car_5.jpg",
      },
      price: 165,
      title: "Zawiesie do szaszki i dragonki",
    },
  ],
  france: [
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/lad_fr_01.jpg",
        path2: "img/francja/lad_fr_02.jpg",
        path3: "img/francja/lad_fr_03.jpg",
      },
      price: 100,
      title: "Ładownice",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/chassepot.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 70,
      title: "Żabka chassepot wz. 1866",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/zabka_fr74_1.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 74 [1]",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/fr_74_nit.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 74 wersja nitowana [1] ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/fr_86_93.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 86/93",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/zabka_fr_92_01.jpg",
        path2: "img/zabka_fr_92_02.jpg",
        path3: "img/zabka_fr_92_03.jpg",
      },
      price: 65,
      title: "Żabka francuska do bagnetu wz. 92 ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/fr_1822.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 140,
      title: "Żabka do szabli francuskiej wz. 1822 troczona do siodła",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/pol_1.jpg",
        path2: "img/francja/pol_2.jpg",
        path3: "img/francja/pol_3.jpg",
        path4: "img/francja/pol_4.jpg",
      },
      price: 400,
      title: "Ładownice na magazynki R.K.M Chauchat wz. 1915",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/cebra_03.jpg",
        path2: "img/francja/cebra_02.jpg",
        path3: "img/francja/cebra_01.jpg",
      },
      price: 110,
      title: "Kabura na pistolet Cebra (Ruby)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/lebel_1892_01.jpg",
        path2: "img/francja/lebel_1892_02.jpg",
        path3: "img/francja/lebel_1892_03.jpg",
        path4: "img/francja/lebel_1892_04.jpg",
      },
      price: 250,
      title: "Kabura do rewolweru Lebel wz. 1892 ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/kopaczka_01.jpg",
        path2: "img/francja/kopaczka_02.jpg",
        path3: "img/francja/kopaczka_03.jpg",
      },
      price: 65,
      title: "Futerał na kopaczkę",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/lopatka_fr_01.jpg",
        path2: "img/francja/lopatka_fr_02.jpg",
      },
      price: 75,
      title: "Futerał na łopatkę",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/pas_lebel_03.jpg",
        path2: "img/francja/pas_lebel_01.jpg",
        path3: "img/francja/pas_lebel_02.jpg",
      },
      price: 85,
      title: "Pas nośny kb Lebel wz. 86/93 i kb Berthier wz. 07/15",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/francja/garlacz_vb_francja_01.jpg",
        path2: "img/francja/garlacz_vb_francja_02.jpg",
        path3: "img/francja/garlacz_vb_francja_03.jpg",
      },
      price: 220,
      title: "Pokrowiec na garłacz VB",
    },
  ],
  austroHungary: [
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/lopatka_wegry_01.jpg",
        path2: "img/austria/lopatka_wegry_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał łopatki 1",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/au_lopatka_1.jpg",
        path2: "img/austria/au_lopatka_2.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 120,
      title: "Futerał łopatki 2",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/au_70_73.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka austriacka 1873",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/zabka_au_wz_88_95_01.jpg",
        path2: "img/austria/zabka_au_wz_88_95_02.jpg",
        path3: "img/austria/zabka_au_wz_88_95_03.jpg",
        path4: "img/austria/zabka_au_wz_88_95_04.jpg",
      },
      price: 65,
      title: "Żabka austriacka 88/95",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/zabka_au_szabla_piechoty_01.jpg",
        path2: "img/austria/zabka_au_szabla_piechoty_02.jpg",
        path3: "img/austria/zabka_au_szabla_piechoty_03.jpg",
      },
      price: 70,
      title: "Żabka austriacka do szabli piechoty",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/zabka_au_michalek_01.jpg",
        path2: "img/austria/zabka_au_michalek_02.jpg",
        path3: "img/austria/zabka_au_michalek_03.jpg",
      },
      price: 70,
      title: "Żabka austriacka do tasaka wz. 1853 - 'michałka'",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/austria_3.jpg",
        // path2: "img/zabka_au_wz_88_95_01.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 65,
      title: "Żabka austriacka zastępcza",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/steyr_[1].jpg",
        path2: "img/austria/steyr_[2].jpg",
        path3: "img/austria/steyr_[3].jpg",
      },
      price: 240,
      title: "Kabura do pistoletu Steyr wz. 1912",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/steyr_01.jpg",
        path2: "img/austria/steyr_02.jpg",
        path3: "img/austria/steyr_03.jpg",
        path4: "img/austria/steyr_04.jpg",
        path5: "img/austria/steyr_05.jpg",
        path6: "img/austria/steyr_06.jpg",
      },
      price: 280,
      title: "Kabura do pistoletu Steyr wz. 1912 z pasem nośnym",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/gasser_01.jpg",
        path2: "img/austria/gasser_02.jpg",
        path3: "img/austria/gasser_03.jpg",
      },
      price: 220,
      title: "Kabura na rewolwer Gasser",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/frommer_stop_1915_01.jpg",
        path2: "img/austria/frommer_stop_1915_02.jpg",
        path3: "img/austria/frommer_stop_1915_03.jpg",
        path4: "img/austria/frommer_stop_1915_04.jpg",
        path5: "img/austria/frommer_stop_1915_05.jpg",
        path6: "img/austria/frommer_stop_1915_06.jpg",
      },
      price: 130,
      title: "Kabura na pistolet Frommer - Stop M 1915",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/pas_austria_01.jpg",
        path2: "img/austria/pas_austria_02.jpg",
        path3: "img/austria/pas_austria_03.jpg",
      },
      price: 80,
      title: "Pas austro - węgierski;  (100 cm) + 5pln za 10 cm",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/au_pas_m_1915_1.jpg",
        path2: "img/austria/au_pas_m_1915_2.jpg",
        path3: "img/austria/au_pas_m_1915_3.jpg",
      },
      price: 80,
      title: "Pas M 1915 (100 cm) + 5pln za 10 cm",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/pas_au_01.jpg",
        path2: "img/austria/pas_au_02.jpg",
        // path3: "img/zabka_au_wz_88_95_01.jpg",
      },
      price: 79,
      title: "Pas nośny KBK Mannlicher ",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/sztylpy_01.jpg",
        path2: "img/austria/sztylpy_02.jpg",
        path3: "img/austria/sztylpy_03.jpg",
      },
      price: 360,
      title: "Sztylpy wz. 1910.",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/ladownica_pl_au_01.jpg",
        path2: "img/austria/ladownica_pl_au_02.jpg",
        path3: "img/austria/ladownica_pl_au_03.jpg",
      },
      price: 90,
      title: "Ładownice do Mannlichera (cena za jedną ładownicę)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/lad_mann_01.jpg",
        path2: "img/austria/lad_mann_02.jpg",
        path3: "img/austria/lad_mann_03.jpg",
      },
      price: 380,
      title: "Ładownica Mannlicher (komplet)",
    },
    {
      currency: "PLN",
      images: {
        mainImage: "img/austria/au_torba_meldunkowa_01.jpg",
        path2: "img/austria/au_torba_meldunkowa_02.jpg",
        path3: "img/austria/au_torba_meldunkowa_03.jpg",
      },
      price: 350,
      title: "Torba meldunkowa",
    },
  ],
};
