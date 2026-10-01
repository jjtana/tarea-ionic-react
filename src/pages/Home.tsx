import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          style={{
            textAlign: 'center',
            padding: '30px',
          }}
        >

          <h1>Datos Personales</h1>

          <img
            src="/foto.jpg"
            alt="Foto 2x2"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '5px',
              margin: '20px',
            }}
          />

          <h2>Jostin Wilmer Perez Santana</h2>

          <p>
            <strong>Matrícula:</strong> 2022-1096
          </p>

          <p>
            <strong>Correo:</strong> 20220196@itla.edu.do
          </p>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;