// blueprints/ember-drop/index.js
module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addBowerPackageToProject('drop', '1.4.2'); // is a promise
  }
};
