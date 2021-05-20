package com.hack.inai.DTO;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.sf.jsefa.csv.annotation.CsvDataType;
import net.sf.jsefa.csv.annotation.CsvField;

@Data
@AllArgsConstructor
@NoArgsConstructor
@CsvDataType()
public class ObraDTO {
    @CsvField(pos = 1)
	private String ID;
    @CsvField(pos = 2, format = "dd/MM/yy")
	private Date createDate;
    @CsvField(pos = 3, format = "dd/MM/yy")
    private Date modDate;
    @CsvField(pos = 4)
	private Date ejercicio;
    @CsvField(pos = 5, format = "dd/MM/yyyy")
	private Date inicioInfoDate;
    @CsvField(pos = 6, format = "dd/MM/yyyy")
	private Date finInfoDate;
    @CsvField(pos = 7)
	private String denominacionObra;
    @CsvField(pos = 8)
	private String numContr;
    @CsvField(pos = 9, format = "dd/MM/yyyy")
	private Date contrDate;
    @CsvField(pos = 10)
	private Double montoServicio;
    @CsvField(pos = 11)
	private String vialTipo;
    @CsvField(pos = 12)
	private String nombreVial;
}
