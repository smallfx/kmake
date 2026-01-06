ENTRY(_start)

MEMORY {
  RAM (rwx) : ORIGIN = 0x00010000, LENGTH = 256M
}

SECTIONS {
  .text : ALIGN(16) {
    KEEP(*(.text.start))
    *(.text*)
    *(.rodata*)
  } > RAM

  .eh_frame : { *(.eh_frame*) } > RAM

  .data : ALIGN(16) {
    __data_start = .;
    *(.data*)
    __data_end = .;
  } > RAM

  .bss (NOLOAD) : ALIGN(16) {
    __bss_start = .;
    *(.bss*)
    *(COMMON)
    __bss_end = .;
  } > RAM

  . = ALIGN(16);
  __heap_base = .;
  __heap_end  = ORIGIN(RAM) + LENGTH(RAM) - 1M;

  __stack_bottom = __heap_end;
  __stack_top = __heap_end + 1M;
}
