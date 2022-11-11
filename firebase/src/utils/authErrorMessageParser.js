export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi";
        case "auth/email-already-exists":
            return "Bu mail daha önce alınmış";
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı";
        case "auth/weak-password":
            return "Lütfen güçlü bir parola giriniz!";
        case "auth/wrong-password":
            return "Geçersiz parola";
        default:
            return errorCode;
    }
}