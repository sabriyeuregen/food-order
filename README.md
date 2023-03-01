# Food Order React Project - React ile oluşturduğum yemek sipariş projem

## Proje Özeti
 Projeyi oluştururken iki branchta çalıştım.İlk olarak develop branchında geliştirme yaptım ardından main branchında son halini repoya ekledim. Branchlarda her değişiklik yaotığımda commit mesajı eklemeye özen gösterdim.
 Projemde sayfanın header kısmında bulunan navigation bar ile react-router-dom kütüphanesi aracılığıyla sayfalar arası gezinilebilir .Ürünler sayfasında data.json dosyasındaki verileri ilgili componentte map fonksiyonu ile componente ekledim ve css grid düzeninde görüntüledim.Her bir ürünü sepete ekle butonuna tıklayarak contextApi aracılığı ile diğer bir component olan BasketCard componentine aktarıp görüntülemiş oldum.Basketcard-context dosyasında sepete ekle ve sil fonksiyonlarını useReducer hookunu kullanarak yazdım.Bu sayede hooktaki typeı kontrol edilerek istenilen add veya remove fonksiyonu çalışmış oldu.

![Food Order](https://drive.google.com/file/d/1-rFi0EeDo8-sDCPQGq4xSYpxsnBrQLhR/view?usp=sharing)

## Libraries /Kütüphaneler
+React
+React-router-dom

## Style-Stile
+ Module CSS

### Projeyi oluştururken kullandığım kaynaklar
+ React - The Complete Guide (incl Hooks, React Router, Redux)-Udemy Maximilian Schwarzmüller
+ Academind Youtube Kanalı
+ [React-router-dom](https://reactrouter.com/en/main)


 ### Demo
 https://food-orderreact.netlify.app/
