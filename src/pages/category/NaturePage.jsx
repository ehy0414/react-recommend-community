function NaturePage() {
    const [naturePosts, setNaturePosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("desc");
    const pageSize = 12;  
  
    // ✅ 모든 계절의 nature 카테고리 가져오기
    const getNatureData = async () => {
      try {
        const seasons = ["spring", "summer", "autumn", "winter"];
        const requests = seasons.map((season) => api.get(`/${season}`));
        
        const responses = await Promise.all(requests);
        const allNatureData = responses.flatMap((res) =>
          res.data.filter((item) => item.category === "nature")
        );
  
        setNaturePosts(allNatureData);
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
      }
    };
  
    useEffect(() => {
      getNatureData();
    }, []);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currentPage]);
  
    const sortedNaturePosts = [...naturePosts].sort((a, b) =>
      sortOrder === "desc" ? b.id - a.id : a.id - b.id
    );
  
    const currentData = sortedNaturePosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.ceil(sortedNaturePosts.length / pageSize);
  
    return (
      <Wrapper>
        <NatureSelector season="자연"/>
        <SortSelect value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <SelectOption value="desc">최신순</SelectOption>
          <SelectOption value="asc">오래된 순</SelectOption>
        </SortSelect>
  
        <Button />
  
        {currentData.length > 0 ? (
          <NatureList data={currentData} />
        ) : (
          <Message>게시글이 등록되지 않았어요.</Message>
        )}
  
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                margin: "0 5px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                border: "1px solid #555",
                borderRadius: "4px",
                backgroundColor: currentPage === index + 1 ? "#555" : "#fff",
                color: currentPage === index + 1 ? "#fff" : "#000",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
  