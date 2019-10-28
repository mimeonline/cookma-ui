<template>
  <q-page padding>
    <div class="self-center" style="max-width: 700px; margin:0 auto; ">
      <q-card>
        <q-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spaghetti_bolognese_pasta.jpg/1600px-Spaghetti_bolognese_pasta.jpg"
        />

        <q-item>
          <q-item-section>
            <q-item-label class="text-h4 text-bold">
              Spaghetti Bolognese
            </q-item-label>
            <q-item-label caption>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.r
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-section>
          <q-rating value="3" size="1.5em" color="yellow" readonly />
          10 Bewertungen
          <q-rating
            value="1"
            size="1.5em"
            max="1"
            color="lime-9"
            icon="favorite_border"
            class="q-pl-lg"
          />
          930
        </q-card-section>

        <q-card-section>
          <q-separator />
        </q-card-section>

        <q-card-section>
          <div class="row items-center">
            <div class="col-auto text-h5 q-pr-lg">Aufwand</div>
            <div class="col">
              <q-icon name="fas fa-exclamation" color="lime-9" />
              Mittel
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row justify-center q-gutter-lg">
            <div class="col-auto">
              <div>
                <q-knob
                  show-value
                  min="0"
                  max="60"
                  value="45"
                  :thickness="0.13"
                  color="lime-9"
                  track-color="lime-2"
                  size="80px"
                  font-size="16px"
                  class="q-ma-md"
                >
                  <div class="column ">
                    <div class="col text-center">45</div>
                    <div class="col text-center">Min.</div>
                  </div>
                </q-knob>
              </div>
              <div class="text-center">Zubereitung</div>
            </div>
            <div class="col-auto">
              <div>
                <q-knob
                  show-value
                  min="0"
                  max="60"
                  value="0"
                  :thickness="0.13"
                  color="lime-9"
                  track-color="lime-2"
                  size="80px"
                  font-size="16px"
                  class="q-ma-md"
                >
                  <div class="column text-center">
                    <div class="col ">0</div>
                    <div class="col ">Min.</div>
                  </div>
                </q-knob>
              </div>
              <div class="text-center">Back/Kochzeit</div>
            </div>
            <div class="col-auto">
              <div>
                <q-knob
                  show-value
                  min="0"
                  max="60"
                  value="0"
                  :thickness="0.13"
                  color="lime-9"
                  track-color="lime-2"
                  size="80px"
                  font-size="16px"
                  class="q-ma-md"
                >
                  <div class="column text-center">
                    <div class="col ">0</div>
                    <div class="col ">Min.</div>
                  </div>
                </q-knob>
              </div>
              <div class="text-center">Ruhezeit</div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-separator />
        </q-card-section>

        <q-card-section>
          <div class="text-h5">Zutaten</div>
          <div class="row">
            <div class="col-auto q-px-lg">300 g</div>
            <div class="col">Pasta</div>
          </div>
          <div class="row">
            <div class="col-auto q-px-lg">400 g</div>
            <div class="col">Tomaten</div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-separator />
        </q-card-section>

        <q-card-section>
          <div class="text-h5">Zubereitung</div>

          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="lime-9" text-color="white">1</q-avatar>
              </q-item-section>
              <q-item-section>Mache nun folgendes.....</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="lime-9" text-color="white">2</q-avatar>
              </q-item-section>
              <q-item-section
                >Und weiter geht es mit diesem Schritt.....</q-item-section
              >
            </q-item>
          </q-list>
        </q-card-section>

        <q-item-section>
          <div class="row justify-end q-px-lg q-pb-lg">
            <div class="col-auto ">
              <q-chip
                ripple
                clickable
                icon="bookmark"
                color="lime-9"
                text-color="white"
              >
                Speichern
              </q-chip>
            </div>
          </div>
        </q-item-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
