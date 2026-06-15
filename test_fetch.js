// Let's use native global.fetch!

async function test() {
  const url = 'https://shopee.vn/product/1215049888/44067632097';
  const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}`;
  try {
    const res = await fetch(apiUrl);
    console.log('Status:', res.status);
    const data = await res.json();
    console.log('Microlink Data:', data);
  } catch (err) {
    console.error(err);
  }
}
test();
