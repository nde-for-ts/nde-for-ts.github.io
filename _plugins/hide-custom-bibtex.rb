module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
      keywords = Array(@context.registers[:site].config['filtered_bibtex_keywords']).map(&:to_s)

      keywords.each do |keyword|
        input = remove_bibtex_field(input, keyword)
      end

      # Clean superscripts in author lists
      input = input.gsub(/^.*\bauthor\b *= *\{.*$\n/) { |line| line.gsub(/[*†‡§¶‖&^]/, '') }

      return input
    end

    def remove_bibtex_field(input, keyword)
      lines = input.lines
      output = []
      index = 0

      while index < lines.length
        line = lines[index]
        unless line.match?(/^\s*#{Regexp.escape(keyword)}\s*=/i)
          output << line
          index += 1
          next
        end

        depth = brace_delta(line)
        index += 1
        while depth.positive? && index < lines.length
          depth += brace_delta(lines[index])
          index += 1
        end
      end

      output.join
    end

    def brace_delta(line)
      delta = 0
      escaped = false

      line.each_char do |char|
        if escaped
          escaped = false
          next
        end

        if char == "\\"
          escaped = true
        elsif char == "{"
          delta += 1
        elsif char == "}"
          delta -= 1
        end
      end

      delta
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
