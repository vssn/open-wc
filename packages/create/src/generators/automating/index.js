const AutomatingMixin = subclass =>
  class extends subclass {
    async execute() {
      await super.execute();

      // extend package.json
      this.copyTemplateJsonInto(
        `${__dirname}/templates/_package.json`,
        this.destinationPath('package.json'),
      );

      // write everything else
      await this.copyTemplates(`${__dirname}/templates/static/**/*`);
    }
  };

export default AutomatingMixin;
