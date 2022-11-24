export default function (code) {
    switch (code) {
        case "auth/wrong-password":
            return "Geçersiz parola...";
        case "auth/user-not-found":
            return "Böyle bir kullanıcı bulunamadı. Mail adresini kontrol ediniz";
        default:
            return "Hata";
    }
}