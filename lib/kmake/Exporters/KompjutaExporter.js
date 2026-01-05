"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KompjutaExporter = void 0;
const Exporter_1 = require("kmake/Exporters/Exporter");
const NinjaExporter_1 = require("kmake/Exporters/NinjaExporter");
const MakeExporter_1 = require("kmake/Exporters/MakeExporter");
const CLionExporter_1 = require("kmake/Exporters/CLionExporter");
const CompileCommandsExporter_1 = require("kmake/Exporters/CompileCommandsExporter");
class KompjutaExporter extends Exporter_1.Exporter {
    constructor(options) {
        super(options);
        let flags = '--target=riscv64-unknown-elf -march=rv64imfd -mabi=lp64d -Os -ffreestanding -fno-builtin -nostdlib -nostartfiles -mno-relax "-Wl,--no-relax"';
        let outputExtension = '.elf';
        this.ninja = new NinjaExporter_1.NinjaExporter(options, 'clang', 'clang++', flags, flags, flags, outputExtension);
        this.make = new MakeExporter_1.MakeExporter(options, 'clang', 'clang++', flags, flags, flags, outputExtension);
        this.clion = new CLionExporter_1.CLionExporter(options);
        this.compileCommands = new CompileCommandsExporter_1.CompilerCommandsExporter(options);
    }
    async exportSolution(project, from, to, platform, vrApi, options) {
        this.ninja.exportSolution(project, from, to, platform, vrApi, options);
        this.make.exportSolution(project, from, to, platform, vrApi, options);
        this.clion.exportSolution(project, from, to, platform, vrApi, options);
        this.compileCommands.exportSolution(project, from, to, platform, vrApi, options);
    }
}
exports.KompjutaExporter = KompjutaExporter;
//# sourceMappingURL=KompjutaExporter.js.map