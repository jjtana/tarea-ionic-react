import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Experiencia: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Experiencia</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          style={{
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h1>Mi experiencia realizando la tarea</h1>

          <p>
            En este video explico mi experiencia desarrollando
            esta aplicación con Ionic y React.
          </p>

          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              maxWidth: '900px',
              margin: '30px auto',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/EIG2iLyJAjw"
              title="Mi experiencia"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              allowFullScreen
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;