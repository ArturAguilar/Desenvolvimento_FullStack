ullStack\JAVASCRIPT\AJAX\ASPHint\gethint.asp
<%
Response.ContentType = "text/plain"
Dim nomes, q, sugestao, i
nomes = Array("Ana","Bruno","Carlos","Daniela","Eduardo","Fernanda","Gabriel","Helena","Isabela","João","Lucas","Mariana","Pedro","Rafael","Sofia")
q = LCase(Request.QueryString("q"))
sugestao = ""

If q <> "" Then
    For i = 0 To UBound(nomes)
        If LCase(Left(nomes(i), Len(q))) = q Then
            If sugestao = "" Then
                sugestao = nomes(i)
            Else
                sugestao = sugestao & ", " & nomes(i)
            End If
        End If
    Next
End If

If sugestao = "" Then
    Response.Write "Sem sugestão"
Else
    Response.Write sugestao
End If
%>