package main

import (
	"fmt"
	"text/template"

	"log"
	"net/http"
	"os"
)

type Page struct{
	Title string
	Body[]byte 
}
type Per struct{
	Nombre string
}

func (p *Page) save() error{
	fileName:=p.Title+".txt"
	return os.WriteFile(fileName,p.Body,0600)
}

func loadPage(title string) (*Page,error){
	filename:=title+".html"
	fmt.Println(filename)
	//os.ReadFile lee archivo, se le pasa el nombre del archico
	body,err:=os.ReadFile(filename)
	if err != nil{
		return nil,err
	}
	return &Page{Title: title,Body: body},nil

}

func viewHandler(w http.ResponseWriter,r *http.Request){
	pag:=r.URL.Path[len("/home/"):]
	p,err:=loadPage(pag)
	if err!=nil {
		log.Fatal(err)
	}
	fmt.Fprintln(w,p)

}

func main(){


	http.HandleFunc("/home/",func(w http.ResponseWriter, r *http.Request) {
		t,_:=template.ParseFiles(r.URL.Path[len("/home/"):])
		mi:=Per{Nombre:"JUAN"}
		fmt.Println(mi)
		t.Execute(w,mi)
	})

	http.ListenAndServe(":8080",nil)
}