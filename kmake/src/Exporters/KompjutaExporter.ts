import { Exporter } from 'kmake/Exporters/Exporter';
import { Project } from 'kmake/Project';
import { NinjaExporter } from 'kmake/Exporters/NinjaExporter';
import { MakeExporter } from 'kmake/Exporters/MakeExporter';
import { CLionExporter } from 'kmake/Exporters/CLionExporter';
import { CompilerCommandsExporter } from 'kmake/Exporters/CompileCommandsExporter';

export class KompjutaExporter extends Exporter {
	ninja: NinjaExporter;
	make: MakeExporter;
	clion: CLionExporter;
	compileCommands: CompilerCommandsExporter;

	constructor(options: any) {
		super(options);
		
		let flags = '--target=riscv64-unknown-elf -march=rv64imfd -mabi=lp64d -Os -ffreestanding -fno-builtin -nostdlib -nostartfiles -mno-relax "-Wl,--no-relax"';

		let outputExtension = '.elf';

		this.ninja = new NinjaExporter(options, 'clang', 'clang++', flags, flags, flags, outputExtension);
		this.make = new MakeExporter(options, 'clang', 'clang++', flags, flags, flags, outputExtension);
		this.clion = new CLionExporter(options);
		this.compileCommands = new CompilerCommandsExporter(options);
	}

	async exportSolution(project: Project, from: string, to: string, platform: string, vrApi: any, options: any) {
		this.ninja.exportSolution(project, from, to, platform, vrApi, options);
		this.make.exportSolution(project, from, to, platform, vrApi, options);
		this.clion.exportSolution(project, from, to, platform, vrApi, options);
		this.compileCommands.exportSolution(project, from, to, platform, vrApi, options);
	}
}
