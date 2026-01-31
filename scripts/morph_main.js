// On stocke le code du Header dans une variable
const headerHTML = `
<header>
    <h1 class="logo_morphosia"> Morphosia </h1> <!-- Main Title -->
    <nav>
        <!-- Menu -->
        <p>
            <a class="button_link_black" href="morphosia.html">Accueil</a>
            <a class="button_link_black" href="presentation_morph.html" class="main_police">Présentation</a>
            <a class="button_link_black" href="morphosia_dates.html" class="main_police">Next & Past Dates</a>
            <a class="button_link_black" href="morph_podcast.html" class="main_police">Podcast</a>
            <a class="button_link_black" href="morph_contact.html" class="main_police">Contact</a>
            <a class="button_link_black logo_subphoria" href="../subphoria/subphoria.html">Subphoria</a>
        </p>
    </nav>
</header>
`;

// On stocke le code du Footer dans une variable (avec tes liens sociaux)
const footerHTML = `
<footer class="main_police">
    <section class="pied">
        <div><p>Social Networks :</p></div>
        <div>
            <p>
                <span><span class="logo_subphoria logo_pied">Subphoria</span> :</span>
                <a class="button_link_colored" target="_blank" href="https://www.instagram.com/loanne_subphoria/">
                    <img class="svg-icon" src="../images/instagram-white-icon.svg" alt="Icon Instagram" title="lien vers l'instagram de Subphoria" width="24" height="24">
                </a>
                <a class="button_link_colored" target="_blank" href="https://soundcloud.com/subphoria">
                    <img class="svg-icon" src="../images/soundcloud-white-icon.svg" alt="Icon Soundcloud" title="lien vers le Soundcloud de Subphoria" width="24" height="24">
                </a>
                <a class="button_link_colored" target="_blank" href="https://linktr.ee/Subphoria">
                    <img class="svg-icon" src="../images/linktree-white-icon.svg" alt="Icon Linktree" title="lien vers le Linktree de Subphoria" width="24" height="24">
                </a>
            </p>
        </div>
        <div>
            <p>
                <span><span class="logo_morphosia logo_pied">Morphosia</span> :</span>
                <a class="button_link_colored" target="_blank" href="https://www.instagram.com/morphosia__/">
                    <img class="svg-icon" src="../images/instagram-white-icon.svg" alt="Icon Instagram" title="lien vers l'instagram de Morphosia" width="24" height="24">
                </a>
                <a class="button_link_colored" target="_blank" href="https://linktr.ee/MORPHOSIA">
                    <img class="svg-icon" src="../images/linktree-white-icon.svg" alt="Icon Linktree" title="lien vers le Linktree de Morphosia" width="24" height="24">
                </a>
            </p>
        </div>
    </section>
</footer>
`;

// Cette fonction injecte le texte directement dans les IDs
window.onload = function() {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;
};