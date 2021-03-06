USETEXTLINKS = 1
foldersTree = gFld("C802Z品管簡介", "photos.html")
// ***************************************************************** 
	aux1 = insFld(foldersTree, gFld("01-人員組織", ""))
 		   insDoc(aux1, gLnk(0, "11組織架構", "./01/11/new_page_50.htm"))
 		   insDoc(aux1, gLnk(0, "12人員職掌", "./01/12/new_page_49.htm"))
 		   insDoc(aux1, gLnk(0, "13品管資格要求", "./01/13/new_page_154.htm")) 
// ***************************************************************** 
     aux1 = insFld(foldersTree, gFld("02-合約規範", ""))
 	       insDoc(aux1, gLnk(0, "21本標合約", "./02/21/new_page_3.htm"))
 		   insDoc(aux1, gLnk(0, "22引用規範", "./02/22/new_page_6.htm"))
 		   insDoc(aux1, gLnk(0, "23開工前核報資料", "./02/23/new_page_9.htm")) 
// ***************************************************************** 
         aux1 = insFld(foldersTree, gFld("03-材料試驗", ""))
	       insDoc(aux1, gLnk(0, "31材料試驗流程", "./03/31/new_page_157.htm"))
	       insDoc(aux1, gLnk(0, "32材料試驗頻率", "./03/32/new_page_1.htm"))
	       insDoc(aux1, gLnk(0, "33混凝土-C", "./03/33/new_page_97.htm"))
 		   insDoc(aux1, gLnk(0, "34噴凝土-SC", "./03/34/new_page_95.htm"))
 		   insDoc(aux1, gLnk(0, "35土壤-S", "./03/35/new_page_102.htm")) 
 	       insDoc(aux1, gLnk(0, "36瀝青-A", "./03/36/new_page_104.htm"))
 		   insDoc(aux1, gLnk(0, "37金屬-M", "./03/37/new_page_45.htm"))
 		   insDoc(aux1, gLnk(0, "38其他-E", "./03/38/new_page_46.htm")) 
// **************************************************************** 
        aux1 = insFld(foldersTree, gFld("04-工地試驗室", ""))
               insDoc(aux1, gLnk(0, "41試驗流程", "./04/41/new_page_158.htm"))
               insDoc(aux1, gLnk(0, "42施工成效試驗", "./04/42/new_page_92.htm"))
               insDoc(aux1, gLnk(0, "43駐廠流程", "./04/43/new_page_47.htm"))	
               aux2 = insFld(aux1, gFld("44儀器校驗", ""))
		   	                   	insDoc(aux2, gLnk(0, "441校驗總表", "./04/44/441/new_page_90.htm"))
 	                           	insDoc(aux2, gLnk(0, "442內校流程", "./04/44/441/beenthere_london.jpg"))
                              	insDoc(aux2, gLnk(0, "443外校流程", "./04/44/441/beenthere_london.jpg"))                    	
	           aux2 = insFld(aux1, gFld("45試體控管", ""))
                               	insDoc(aux2, gLnk(0, "451一般混凝土", "./05/55/551/new_page_114.htm"))
                               	insDoc(aux2, gLnk(0, "452一般噴凝土", "./05/55/551/beenthere_athens.jpg"))
                               	insDoc(aux2, gLnk(0, "453鋼纖維噴凝土", "./05/55/551/beenthere_athens.jpg"))
 		                      	insDoc(aux2, gLnk(0, "454砂漿方塊", "./05/55/551/beenthere_athens.jpg"))
 // ***************************************************************** 
      aux1 = insFld(foldersTree, gFld("05-品質管制", ""))
                insDoc(aux1, gLnk(0, "51分項施工計劃書", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
                insDoc(aux1, gLnk(0, "52施工自主檢查", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
                insDoc(aux1, gLnk(0, "53材料製作計劃書", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
                insDoc(aux1, gLnk(0, "54內部品質稽查", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
                insDoc(aux1, gLnk(0, "55預防及矯正", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
                insDoc(aux1, gLnk(0, "56不合格品管制", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
                insDoc(aux1, gLnk(0, "57材料數量控管", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
// ***************************************************************** 
      aux1 = insFld(foldersTree, gFld("06-本標重點材料", ""))
               insDoc(aux1, gLnk(0, "61管羃及支堡", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "62鋼纖維噴凝土", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "63剛性路面", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "64石膠泥瀝青", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "65排水性瀝青", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
// ***************************************************************** 
      aux1 = insFld(foldersTree, gFld("07-管理績效", ""))
               insDoc(aux1, gLnk(0, "71噴凝土配比控管", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "72速凝劑用量控管", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "73鋪面配比控管", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "74品管流程簡化", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
               insDoc(aux1, gLnk(0, "75教育訓練", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))
// ***************************************************************** 
      aux1 = insFld(foldersTree, gFld("08-品質管制紀錄", ""))
                   insDoc(aux1, gLnk(0, "81紀錄總覽表", "www.geocities.com/Paris/LeftBank/2178/beenthere_munich.jpg"))    
// *****************************************************************






