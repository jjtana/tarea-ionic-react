import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Sumadora: React.FC = () => {
  const [numero1, setNumero1] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  const sumar = () => {
    setResultado(numero1 + numero2);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: '30px', textAlign: 'center' }}>

          <h1>Sumadora</h1>

          <IonInput
            label="Primer número"
            labelPlacement="stacked"
            type="number"
            placeholder="Escribe un número"
            value={numero1}
            onIonInput={(e) =>
              setNumero1(Number(e.detail.value))
            }
          />

          <br />

          <IonInput
            label="Segundo número"
            labelPlacement="stacked"
            type="number"
            placeholder="Escribe un número"
            value={numero2}
            onIonInput={(e) =>
              setNumero2(Number(e.detail.value))
            }
          />

          <br />

          <IonButton onClick={sumar}>
            SUMAR
          </IonButton>

          <h2>Resultado: {resultado}</h2>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;