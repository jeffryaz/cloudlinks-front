export function seo(data = {}) {
  data.title = data.title || "Cloudlinks";
  data.metaDescription =
    data.metaDescription ||
    "Cloudlinks adalah sebuah layanan pemendekan url gratis. Memudahkan Anda untuk membagikan url Anda.";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
}
