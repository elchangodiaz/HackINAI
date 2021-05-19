package com.hack.inai.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.stereotype.Service;

@Service
public class ServiceImpl implements IService{

	public static final String delimiter = ",";
	
	public String[] getCsv() {
		
		String csvFile = "F://Documentos//HackINAI//HackINAI//HackINAI//src//main//resources//A121Fr47A_Ingresos-recibidos_1676_Parte_1.csv";
		
		try {
			File file = new File(csvFile);
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
