(() => {
  const products = [
    {name:"GLP-3",label:"GLP-3",dose:"20 mg",lot:"NVM-G3-0529",family:"metabolic",accent:"#9cc4ff",front:{en:"Triple-receptor metabolic research reference.",es:"Referencia metabólica de investigación con triple receptor."},kicker:{en:"Triple-receptor research",es:"Investigación de triple receptor"},composition:{en:"39-amino-acid synthetic peptide.",es:"Péptido sintético de 39 aminoácidos."},target:{en:"Agonist activity at GIPR, GLP-1R, and the glucagon receptor (GCGR).",es:"Actividad agonista sobre GIPR, GLP-1R y el receptor de glucagón (GCGR)."},use:{en:"A triple-action formulation targeting the GLP-1, GIP, and glucagon pathways. It is studied for appetite control, body-fat reduction, and preservation of lean mass during weight loss.",es:"Fórmula de acción triple sobre las vías GLP-1, GIP y glucagón. Se estudia para el control del apetito, la reducción de grasa corporal y la preservación de masa magra durante la pérdida de peso."}},
    {name:"GLP-2",label:"GLP-2",dose:"30 mg",lot:"NVM-G2-0529",family:"metabolic",accent:"#c5afff",front:{en:"Dual-incretin pathway research reference.",es:"Referencia para investigación de doble vía incretina."},kicker:{en:"Dual-pathway research",es:"Investigación de doble vía"},composition:{en:"Synthetic dual-pathway peptide research reference.",es:"Referencia peptídica sintética de doble vía."},target:{en:"Characterized in GLP-1R and GIPR signalling models.",es:"Caracterizada en modelos de señalización GLP-1R y GIPR."},use:{en:"A dual-action formulation targeting the GLP-1 and GIP pathways, designed to increase satiety and improve glucose regulation, insulin sensitivity, and energy metabolism.",es:"Fórmula de acción dual sobre las vías GLP-1 y GIP, diseñada para aumentar la saciedad y mejorar la regulación de la glucosa, la sensibilidad a la insulina y el metabolismo energético."}},
    {name:"GHK-Cu",label:"GHK-Cu",dose:"50 mg",lot:"NVM-GC-0529",family:"repair",accent:"#d59cf1",front:{en:"Copper-peptide matrix research reference.",es:"Referencia de complejo peptídico con cobre para investigación de matriz."},kicker:{en:"Matrix signalling",es:"Señalización de matriz"},composition:{en:"Copper complex of glycyl-L-histidyl-L-lysine.",es:"Complejo de cobre de glicil-L-histidil-L-lisina."},target:{en:"No single canonical receptor; studied through copper-dependent, gene-expression, and extracellular-matrix pathways.",es:"No tiene un receptor canónico único; se estudia mediante vías dependientes de cobre, expresión génica y matriz extracelular."},use:{en:"A copper peptide associated with collagen production, skin regeneration, and hair health. It is also investigated for its potential role in tissue repair and modulation of inflammation.",es:"Péptido de cobre asociado con la producción de colágeno, la regeneración cutánea y la salud capilar. También se investiga por su posible papel en la reparación de tejidos y la modulación de la inflamación."}},
    {name:"MOTS-C",label:"MOTS-C",dose:"10 mg",lot:"NVM-MC-0529",family:"cellular",accent:"#76e6d2",front:{en:"Mitochondrial-derived peptide reference.",es:"Referencia de péptido derivado de la mitocondria."},kicker:{en:"Mitochondrial communication",es:"Comunicación mitocondrial"},composition:{en:"16-amino-acid mitochondrial-derived peptide.",es:"Péptido de 16 aminoácidos derivado de la mitocondria."},target:{en:"No established classical surface receptor; studied through AMPK-related and cellular-stress pathways.",es:"No tiene un receptor de superficie clásico establecido; se estudia mediante vías relacionadas con AMPK y estrés celular."},use:{en:"A mitochondrial peptide involved in the regulation of cellular metabolism. It is investigated for its potential to improve glucose and fat utilization, insulin sensitivity, and the body's response to metabolic stress.",es:"Péptido mitocondrial que participa en la regulación del metabolismo celular. Se investiga por su posible capacidad para mejorar el uso de glucosa y grasas, la sensibilidad a la insulina y la respuesta del organismo al estrés metabólico."}},
    {name:"IPA",label:"IPA",dose:"10 mg",lot:"NVM-IP-0529",family:"cellular",accent:"#f0cc87",front:{en:"Selective ghrelin-receptor research reference.",es:"Referencia selectiva para investigación del receptor de grelina."},kicker:{en:"Receptor selectivity",es:"Selectividad del receptor"},composition:{en:"Synthetic pentapeptide commonly known as ipamorelin.",es:"Pentapéptido sintético conocido como ipamorelina."},target:{en:"Selective agonist of the growth-hormone secretagogue receptor GHSR-1a.",es:"Agonista selectivo del receptor secretagogo de hormona de crecimiento GHSR-1a."},use:{en:"A selective growth-hormone secretagogue. It is used experimentally to support muscle recovery, body composition, and processes related to regeneration and collagen production.",es:"Secretagogo de la hormona del crecimiento de acción selectiva. Se utiliza experimentalmente para apoyar la recuperación muscular, la composición corporal y procesos relacionados con la regeneración y la producción de colágeno."}},
    {name:"TESA",label:"TESA",dose:"10 mg",lot:"NVM-TM-0529",family:"metabolic",accent:"#88a8ff",front:{en:"GHRH-pathway peptide research reference.",es:"Referencia peptídica para investigación de la vía GHRH."},kicker:{en:"GHRH signalling",es:"Señalización GHRH"},composition:{en:"44-amino-acid synthetic analogue of growth-hormone-releasing hormone, commonly known as tesamorelin.",es:"Análogo sintético de 44 aminoácidos de la hormona liberadora de hormona de crecimiento, conocido como tesamorelina."},target:{en:"Agonist of the growth-hormone-releasing-hormone receptor (GHRHR).",es:"Agonista del receptor de la hormona liberadora de hormona de crecimiento (GHRHR)."},use:{en:"A synthetic analogue of growth-hormone-releasing hormone. It stimulates physiological GH release and is studied for its effects on visceral fat, lipolysis, and maintenance of muscle mass.",es:"Análogo sintético de la hormona liberadora de hormona del crecimiento. Estimula la liberación fisiológica de GH y se estudia por sus efectos sobre la grasa visceral, la lipólisis y el mantenimiento de la masa muscular."}},
    {name:"GLOW",label:"GLOW",dose:"70 mg",lot:"NVM-GW-0529",family:"repair",accent:"#f08eb5",front:{en:"Defined multi-peptide research blend.",es:"Mezcla definida de péptidos para investigación."},kicker:{en:"Multi-peptide matrix",es:"Matriz multipéptido"},composition:{en:"Multi-peptide blend; every component and ratio must be confirmed in the batch COA.",es:"Mezcla multipéptido; cada componente y proporción debe confirmarse en el COA del lote."},target:{en:"Receptor profile depends on the verified component list and cannot be inferred from the blend name alone.",es:"El perfil de receptores depende de la lista verificada de componentes y no puede inferirse solo del nombre de la mezcla."},use:{en:"A formulation combining BPC-157, TB-500, and GHK-Cu. Its experimental focus is to support tissue repair, reduce inflammation, and stimulate collagen to promote recovery and skin care.",es:"Fórmula que combina BPC-157, TB-500 y GHK-Cu. Está orientada experimentalmente a apoyar la reparación tisular, reducir la inflamación y estimular el colágeno para favorecer la recuperación y el cuidado de la piel."}},
    {name:"KLOW",label:"KLOW",dose:"80 mg",lot:"NVM-KW-0529",family:"repair",accent:"#e4b36b",front:{en:"Defined multi-component research blend.",es:"Mezcla definida de múltiples componentes para investigación."},kicker:{en:"Exploratory blend",es:"Mezcla exploratoria"},composition:{en:"Multi-component blend; identity, ratio, purity, and net amount require batch-specific confirmation.",es:"Mezcla multicomponente; identidad, proporción, pureza y cantidad neta requieren confirmación por lote."},target:{en:"Receptor activity must be assigned from the verified formulation, not from the trade name.",es:"La actividad sobre receptores debe asignarse desde la formulación verificada, no desde el nombre comercial."},use:{en:"An experimental combination of GHK-Cu, BPC-157, TB-500, and KPV. It is formulated to support tissue and joint repair, modulate inflammation, and stimulate collagen production.",es:"Combinación experimental de GHK-Cu, BPC-157, TB-500 y KPV. Está formulada para apoyar la reparación de tejidos y articulaciones, modular la inflamación y estimular la producción de colágeno."}},
    {name:"Kisspeptin",label:"KISS",dose:"10 mg",lot:"NVM-KP-0529",family:"endocrine",accent:"#d39cff",front:{en:"Neuroendocrine signalling research reference.",es:"Referencia para investigación de señalización neuroendocrina."},kicker:{en:"Neuroendocrine signalling",es:"Señalización neuroendocrina"},composition:{en:"Synthetic kisspeptin peptide reference; fragment identity must match the COA.",es:"Referencia sintética de kisspeptina; la identidad del fragmento debe coincidir con el COA."},target:{en:"Agonist activity at the KISS1 receptor (KISS1R/GPR54).",es:"Actividad agonista sobre el receptor KISS1 (KISS1R/GPR54)."},use:{en:"A peptide related to regulation of the reproductive axis and natural hormone production. It is investigated for its potential effects on sexual function, libido, and hormonal restoration.",es:"Péptido relacionado con la regulación del eje reproductivo y la producción hormonal natural. Se investiga por sus posibles efectos sobre la función sexual, la libido y el restablecimiento hormonal."}},
    {name:"VIP",label:"VIP",dose:"10 mg",lot:"NVM-VP-0529",family:"cellular",accent:"#76e6d2",front:{en:"VPAC-receptor peptide research reference.",es:"Referencia peptídica para investigación de receptores VPAC."},kicker:{en:"VPAC receptor signalling",es:"Señalización de receptores VPAC"},composition:{en:"28-amino-acid vasoactive intestinal peptide.",es:"Péptido intestinal vasoactivo de 28 aminoácidos."},target:{en:"Agonist at VPAC1 and VPAC2 receptor systems.",es:"Agonista de los sistemas receptores VPAC1 y VPAC2."},use:{en:"A vasoactive peptide with effects on circulation, inflammation, and diverse cellular functions. Its experimental use seeks to support tissue oxygenation, physical recovery, and regenerative processes.",es:"Péptido vasoactivo con efectos sobre la circulación, la inflamación y diversas funciones celulares. Su uso experimental busca apoyar la oxigenación de los tejidos, la recuperación física y los procesos de regeneración."}},
    {name:"Cagri",label:"CAGRI",dose:"10 mg",lot:"NVM-CG-0529",family:"metabolic",accent:"#9cc4ff",front:{en:"Long-acting amylin-analogue research reference.",es:"Referencia de análogo de amilina de acción prolongada."},kicker:{en:"Amylin analogue research",es:"Investigación de análogos de amilina"},composition:{en:"Lipidated, long-acting amylin analogue commonly known as cagrilintide.",es:"Análogo de amilina lipidado y de acción prolongada conocido como cagrilintida."},target:{en:"Studied at amylin receptors formed by calcitonin receptor complexes with RAMP proteins.",es:"Se estudia en receptores de amilina formados por complejos del receptor de calcitonina con proteínas RAMP."},use:{en:"An amylin analogue studied for appetite control and weight loss. Its activity is intended to increase satiety and support reductions in body fat.",es:"Análogo de la amilina estudiado para el control del apetito y la pérdida de peso. Su acción busca aumentar la saciedad y favorecer la reducción de grasa corporal."}},
    {name:"BAC Water",label:"BAC",dose:"10 mL",lot:"NVM-BW-0529",family:"essentials",accent:"#c7d0da",front:{en:"Preserved laboratory-water reference.",es:"Referencia de agua preservada para laboratorio."},kicker:{en:"Laboratory essentials",es:"Esenciales de laboratorio"},composition:{en:"Sterile water containing 0.9% benzyl alcohol as a preservative.",es:"Agua estéril con 0,9% de alcohol bencílico como conservante."},target:{en:"No peptide receptor target; quality is defined by preservative concentration, sterility, endotoxin status, and container integrity.",es:"No tiene un receptor peptídico objetivo; su calidad se define por concentración del conservante, esterilidad, endotoxinas e integridad del envase."},use:{en:"Used in quality-control and material-compatibility studies of diluent handling and preserved water systems.",es:"Se utiliza en estudios de control de calidad y compatibilidad de materiales para manejo de diluyentes y sistemas de agua preservada."}}
  ];

  const grid = document.getElementById("product-grid");
  const observer = new IntersectionObserver((items) => items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("revealed");
      observer.unobserve(item.target);
    }
  }), { threshold: 0.12 });
  let activeFilter = "all";

  function renderProducts(language) {
    const lang = language === "es" ? "es" : "en";
    const es = lang === "es";
    const labels = es
      ? {composition:"Composición", target:"Objetivo / receptor", use:"Descripción y uso de investigación", foot:"Contexto de investigación · Sin afirmación terapéutica", coa:"COA por lote", vertical:"PRECISIÓN", lot:"LOTE", exp:"VENCE"}
      : {composition:"Composition", target:"Target / receptor", use:"Research description and use", foot:"Research context · No therapeutic claim", coa:"Batch COA", vertical:"PRECISION", lot:"LOT", exp:"EXP"};

    grid.innerHTML = products.map((product, index) => {
      const hidden = activeFilter !== "all" && activeFilter !== product.family ? " hidden" : "";
      const purity = product.name === "BAC Water"
        ? (es ? "0,9% ALCOHOL BENCÍLICO" : "0.9% BENZYL ALCOHOL")
        : (es ? "≥99% PUREZA*" : "≥99% PURITY*");
      const vertical = product.family === "essentials" ? (es ? "ESENCIALES" : "ESSENTIALS") : labels.vertical;
      return `<article class="product-card${hidden}" tabindex="0" data-family="${product.family}" style="--accent:${product.accent}" data-reveal>
        <span class="product-number">N° ${String(index + 1).padStart(2, "0")}</span>
        <div class="vial"><div class="cap"></div><div class="neck"></div><div class="bottle"><div class="label"><div class="label-main"><span class="label-brand">NOVÜM LABS · RUO</span><strong class="label-name">${product.label}</strong><span class="label-dose">${product.dose}</span><span class="label-meta">${labels.lot} ${product.lot}<br>${purity} · ${labels.exp} 05/2029</span></div><span class="label-vertical">${vertical}</span></div></div></div>
        <h3>${product.name} · ${product.dose}</h3><p>${product.front[lang]}</p><div class="product-tags"><span class="tag">${labels.coa}</span><span class="tag">RUO</span></div>
        <div class="product-back"><span class="back-kicker">${product.kicker[lang]}</span><h3>${product.name}</h3><div class="back-copy"><p><strong>${labels.composition}:</strong> ${product.composition[lang]}</p><p><strong>${labels.target}:</strong> ${product.target[lang]}</p><p><strong>${labels.use}:</strong> ${product.use[lang]}</p></div><span class="back-foot">${labels.foot}</span></div>
      </article>`;
    }).join("");
    document.querySelectorAll(".product-card[data-reveal]").forEach((element) => observer.observe(element));
  }

  const gate = document.getElementById("gate");
  const age = document.getElementById("age");
  const researcher = document.getElementById("researcher");
  const enter = document.getElementById("gate-enter");
  function updateGate() { enter.disabled = !(age.checked && researcher.checked); }
  age.addEventListener("change", updateGate);
  researcher.addEventListener("change", updateGate);
  enter.addEventListener("click", () => {
    sessionStorage.setItem("novum_verified", "true");
    gate.classList.add("closed");
    document.body.classList.remove("gated");
  });
  if (sessionStorage.getItem("novum_verified") === "true") {
    gate.classList.add("closed");
    document.body.classList.remove("gated");
  }

  document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach((card) => card.classList.toggle("hidden", activeFilter !== "all" && card.dataset.family !== activeFilter));
  }));

  const result = document.getElementById("coa-result");
  document.getElementById("lot-search").addEventListener("click", () => {
    const language = window.NovumI18n?.language || "en";
    const value = document.getElementById("lot").value.trim();
    if (!value) {
      result.textContent = language === "es" ? "Ingresa un número de lote para continuar." : "Enter a batch number to continue.";
      return;
    }
    result.innerHTML = language === "es"
      ? '<strong style="color:#e9e6de">Lote no encontrado</strong><br>Revisa el código o solicita al laboratorio el COA correspondiente.'
      : '<strong style="color:#e9e6de">Batch not found</strong><br>Check the code or request the corresponding COA from the laboratory.';
  });

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
  document.addEventListener("novum:languagechange", (event) => renderProducts(event.detail.language));
  renderProducts(document.documentElement.dataset.lang || "en");
})();
