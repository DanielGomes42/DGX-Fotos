DGX FOTOS - SITE

Arquivos:
- index.html
- styles.css

Como personalizar as fotos:
1. Crie uma pasta "assets" e coloque suas fotos lá, por exemplo:
   foto1.jpg, foto2.jpg, foto3.jpg...
2. Troque cada bloco <div class="placeholder">...</div> no index.html por:
   <img src="assets/foto1.jpg" alt="Descrição da foto">
3. Adicione ao styles.css:
   .shot img{width:100%;height:100%;object-fit:cover;display:block}

Hospedagem recomendada sem GitHub Pages:
- Vercel
- Netlify
- Cloudflare Pages

Todos aceitam um site estático como este.
