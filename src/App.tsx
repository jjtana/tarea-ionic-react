import { Navigate, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Sumadora from './pages/Sumadora/Sumadora';
import NumerosLetras from './pages/NumerosLetras/NumerosLetras';
import TablaMultiplicar from './pages/TablaMultiplicar/TablaMultiplicar';
import Experiencia from './pages/Experiencia/Experiencia';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonSplitPane contentId="main">

        {/* MENÚ */}
        <IonMenu contentId="main">

          <IonHeader>
            <IonToolbar>
              <IonTitle>Menú</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonList>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/home" routerDirection="root">
                  <IonLabel>🏠 Inicio</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/sumadora">
                  <IonLabel>➕ Sumadora</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/numeros-letras">
                  <IonLabel>🔤 Número a Letras</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/tabla-multiplicar">
                  <IonLabel>✖️ Tabla de Multiplicar</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/experiencia">
                  <IonLabel>🎥 Mi Experiencia</IonLabel>
                </IonItem>
              </IonMenuToggle>

            </IonList>
          </IonContent>

        </IonMenu>

        {/* CONTENIDO PRINCIPAL */}
        <IonRouterOutlet id="main">

          <Route path="/home" element={<Home />} />

          <Route path="/sumadora" element={<Sumadora />} />

          {/* Estas páginas las crearemos después */}
          <Route
            path="/numeros-letras"
            element={<NumerosLetras />}
          />

          <Route
           path="/tabla-multiplicar"
           element={<TablaMultiplicar />}
           />

          <Route
           path="/experiencia"
           element={<Experiencia />}
          />

          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />

        </IonRouterOutlet>

      </IonSplitPane>

    </IonReactRouter>
  </IonApp>
);

export default App;