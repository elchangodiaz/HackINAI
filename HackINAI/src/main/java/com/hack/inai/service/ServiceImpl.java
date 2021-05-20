package com.hack.inai.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.stereotype.Service;

import com.hack.inai.DTO.ObraDTO;

import net.sf.jsefa.Serializer;
import net.sf.jsefa.csv.CsvIOFactory;

@Service
public class ServiceImpl implements IService{

	public static final String delimiter = ",";
	
	public String[] getCsv() {
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource("A121Fr47A_Ingresos-recibidos_1676_Parte_1.csv").getFile());
		
		
		try {
			FileReader fr = new FileReader(file);
			BufferedReader br = new BufferedReader(fr);

			String line = "";

			String[] tempArr;
			while ((line = br.readLine()) != null) {
				tempArr = line.split(delimiter);
				for (String tempStr : tempArr) {
					System.out.print(tempStr + " ");
				}
				System.out.println();
			}
			br.close();

		} catch (IOException ex) {
			ex.printStackTrace();
		}
		
		return null;

	}
	
}
