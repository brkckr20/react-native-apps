

export const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        .container {
            max-width: 1240px;
            margin: 0 auto;
            width: 100%;
        }

        .title {
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, alpha);
        }

        .group {
            display: grid;
            grid-template-columns: auto auto;
            gap: 12px;
        }

        .group h1,
        .group p {
            color: white;
        }

        .card {
            border: 1px solid #ccc;
        }

        .baslik {
            text-align: center;
            font-size: 24px;
        }

        .card p {
            font-size: 20px;
            text-align: center;
        }

        .bez {
            background-color: #A0AEC0;
        }

        .beztutar {
            background-color: #575fcf;
        }

        .alinanpara {
            background-color: #002884;
        }
    </style>
    <title>Rapor</title>
</head>

<body>
    <div class="container">
        <h1 class="title">İşlem Özet Tablosu</h1>
        <h2>Bakiye Bilgileri</h2>
        <div class="group">
            <div class="card bez">
                <h1 class="baslik">Gönderilen Bez Miktarı</h1>
                <p>10 metre</p>
            </div>
            <div class="card beztutar">
                <h1 class="baslik">Gönderilen Bez Miktarı</h1>
                <p>10 metre</p>
            </div>
            <div class="card alinanpara">
                <h1 class="baslik">Gönderilen Bez Miktarı</h1>
                <p>10 metre</p>
            </div>
            <div class="card">
                <h1 class="baslik">Gönderilen Bez Miktarı</h1>
                <p>10 metre</p>
            </div>
        </div>

    </div>
</body>

</html>`;

