// Redireciona o endereço antigo (vercel.app) para o domínio próprio,
// preservando caminho e parâmetros (?utm_..., fbclid) para não perder o rastreio dos anúncios.
export const config = { matcher: '/:path*' };

export default function middleware(request) {
  const url = new URL(request.url);
  if (url.hostname === 'ketlinespinoza-designweb.vercel.app') {
    return Response.redirect('https://ketlinespinozadesign.com' + url.pathname + url.search, 308);
  }
}
